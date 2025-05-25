import { useDataStore } from "@/store/store";
import {
  CreateQuestion,
  Question,
  QuestionOptions,
  UpdateQuestion,
} from "@/types/question";
import { LoadingStatus } from "@/types";
import {
  createQuestion,
  deleteQuestion,
  getQuestionsByQuiz,
  updateQuestion,
} from "@/store/actions/questions";
import toast from "react-hot-toast";
import { generateUniqueId } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

const ICON = {
  MULTIPLE_CHOICE: "/icons/multi_choice.svg",
  "YES/NO": "/icons/yes_no.svg",
  SHORT_ANSWER: "/icons/short_answer.svg",
};

export default function useQuestion() {
  // --- Local state ---
  const [status, setStatus] = useState<LoadingStatus>("idle");
  const [errorModal, setErrorModal] = useState<{
    show: boolean;
    question: UpdateQuestion;
  } | null>(null);

  // --- Store state ---
  const { activeQuestion, questions, updateSaving } = useDataStore();

  // --- Selectors ---
  const selectedQuestion = useMemo(
    () => questions?.find((el) => el._id === activeQuestion),
    [activeQuestion, questions]
  );

  const selectedQuestionIndex = useMemo(() => {
    const index = questions.findIndex((el) => el._id == activeQuestion);
    return index !== -1 ? index : undefined;
  }, [activeQuestion, questions]);

  // --- Debounced save ---
  const debouncedSave = useCallback(
    debounce(async (payload: UpdateQuestion, previos: Question) => {
      try {
        await updateQuestion(payload);
      } catch (err: any) {
        useDataStore.setState((state) => ({
          questions: state.questions.map((q) =>
            q._id === previos._id ? previos : q
          ),
        }));

        toast.error(err?.message || "Error saving question");
        setErrorModal({ show: true, question: payload });
      }
    }, 500),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSave.cancel();
    };
  }, [debouncedSave]);

  const retrySave = useCallback(async () => {
    if (!errorModal) return;
    const { question } = errorModal;
    setErrorModal(null);
    setStatus("updating");
    try {
      await updateQuestion(question);
    } catch (err: any) {
      setErrorModal({ show: true, question });
    } finally {
      setStatus("idle");
    }
  }, [errorModal]);

  // --- Initialization ---
  const initializeQuestions = useCallback(
    async (quiz_id: string) => {
      if (!quiz_id || status == "loading") return;
      setStatus("loading");
      try {
        const res = await getQuestionsByQuiz(quiz_id);
        if (!selectedQuestion && res?.length) {
          setActiveQuestion(res[0]);
        }
      } catch (error: any) {
        toast.error(error?.message || "Error fetching questions");
      } finally {
        setStatus("idle");
      }
    },
    [getQuestionsByQuiz, status, selectedQuestion]
  );

  // --- Question handlers ---
  const addQuestionHandler = useCallback(
    async (payload: CreateQuestion) => {
      if (!payload || status === "updating") return;
      const tempId = generateUniqueId();
      const tempQuestion: Question = {
        ...payload,
        _id: tempId,
        __v: 0,
      } as Question;
      useDataStore.setState((state) => ({
        questions: [...(state.questions || []), tempQuestion],
        activeQuestion: tempId,
      }));

      try {
        setStatus("updating");
        const realQuestion = await createQuestion(payload);
        useDataStore.setState((state) => ({
          questions: state.questions!.map((q) =>
            q._id === tempId ? realQuestion : q
          ),
          activeQuestion: realQuestion._id,
        }));
      } catch (error: any) {
        useDataStore.setState((state) => ({
          questions: state.questions!.filter((q) => q._id !== tempId),
          activeQuestion: state.questions?.[0]?._id || undefined,
        }));
        toast.error(error?.message || "Error adding question");
      } finally {
        setStatus("idle");
      }
    },
    [status]
  );

  const deleteQuestionHandler = useCallback(
    async (questionId: string) => {
      if (!questionId || status === "deleting") return;
      const oldList = questions || [];
      const oldActive = activeQuestion;
      useDataStore.setState((state) => {
        const newList = state.questions!.filter((q) => q._id !== questionId);
        return {
          questions: newList,
          activeQuestion:
            state.activeQuestion === questionId
              ? newList[0]?._id
              : state.activeQuestion,
        };
      });

      try {
        setStatus("deleting");
        await deleteQuestion(questionId);
      } catch (error: any) {
        useDataStore.setState({
          questions: oldList,
          activeQuestion: oldActive,
        });
        toast.error(error?.message || "Error deleting question");
      } finally {
        setStatus("idle");
      }
    },
    [status, questions, activeQuestion]
  );

  // --- Options handlers ---
  const addOptions = useCallback(
    (option: QuestionOptions) => {
      const question = questions.find((q) => q._id === activeQuestion);
      if (!question) return;
      const updated = { ...question, options: [...question.options, option] };
      updateSelectedQuestion(updated as Question);
    },
    [questions, activeQuestion]
  );

  const removeOption = useCallback(
    (optionId: string) => {
      const question = questions.find((q) => q._id === activeQuestion);
      if (!question) return;
      const updated = {
        ...question,
        options: question.options.filter((opt) => opt.id !== optionId),
      };
      updateSelectedQuestion(updated as Question);
    },
    [questions, activeQuestion]
  );

  const updateOption = useCallback(
    (option: QuestionOptions) => {
      const question = questions.find((q) => q._id === activeQuestion);
      if (!question) return;
      const updated = {
        ...question,
        options: question.options.map((opt) =>
          opt.id === option.id ? option : opt
        ),
      };
      updateSelectedQuestion(updated as Question);
    },
    [questions, activeQuestion]
  );

  // --- Persistence handler ---
  const updateSelectedQuestion = useCallback(
    (updated: Question) => {
      // 1) snapshot
      const prev = useDataStore
        .getState()
        .questions.find((q) => q._id === updated._id);

      if (!prev) return;

      useDataStore.setState((state) => ({
        questions: state.questions.map((q) =>
          q._id === updated._id ? updated : q
        ),
      }));

      const { _id, __v, ...rest } = updated;
      const payload: UpdateQuestion = { ...rest, questionId: updated._id };
      debouncedSave(payload, prev);
    },
    [debouncedSave]
  );

  // --- Utility ---
  const getIconByType = (type: Question["type"]): string => ICON[type];

  const setActiveQuestion = useCallback((arg: Question) => {
    useDataStore.setState({ activeQuestion: arg._id });
  }, []);

  // --- Return ---
  return {
    // status flags
    loading: status === "loading",
    updating: status === "updating",
    deleting: status === "deleting",

    // data
    questions,
    activeQuestion,
    selectedQuestion,
    selectedQuestionIndex,

    // actions
    initializeQuestions,
    addQuestionHandler,
    deleteQuestionHandler,
    updateSelectedQuestion,
    addOptions,
    removeOption,
    updateOption,
    setActiveQuestion,
    getIconByType,

    // modal
    errorModal,
    retrySave,
    closeErrorModal: () => setErrorModal(null),
  };
}
