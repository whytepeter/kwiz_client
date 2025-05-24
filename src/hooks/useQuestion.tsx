import { useDataStore } from "@/store/store";
import { CreateQuestion, Question, QuestionOptions } from "@/types/question";
import { useCallback, useMemo, useState } from "react";
import { LoadingStatus } from "@/types";
import {
  createQuestion,
  deleteQuestion,
  getQuestionsByQuiz,
} from "@/store/actions/questions";
import toast from "react-hot-toast";
import { generateUniqueId } from "@/lib/utils";

const ICON = {
  MULTIPLE_CHOICE: "/icons/multi_choice.svg",
  "YES/NO": "/icons/yes_no.svg",
  SHORT_ANSWER: "/icons/short_answer.svg",
};

export default function useQuestion() {
  const [status, setStatus] = useState<LoadingStatus>("idle");
  const { activeQuestion, questions, updateSaving } = useDataStore();

  const selectedQuestion = useMemo(() => {
    return questions?.find((el) => el._id === activeQuestion);
  }, [activeQuestion, questions]);

  const selectedQuestionIndex = useMemo(() => {
    const index = questions.findIndex((el) => el._id == activeQuestion);
    return index !== -1 ? index : undefined;
  }, [activeQuestion, questions]);

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

  const addQuestionHandler = useCallback(
    async (payload: CreateQuestion) => {
      if (!payload || status === "updating") return;

      // 1. Create a temporary question with a fake ID
      const tempId = generateUniqueId();
      const tempQuestion: Question = {
        ...payload,
        _id: tempId,
        __v: 0,
      } as Question;

      // 2. Optimistically insert into store & select it
      useDataStore.setState((state) => ({
        questions: [...(state.questions || []), tempQuestion],
        activeQuestion: tempId,
      }));

      try {
        setStatus("updating");
        const realQuestion = await createQuestion(payload);

        // 3. Replace temp with real one
        useDataStore.setState((state) => ({
          questions: state.questions!.map((q) =>
            q._id === tempId ? realQuestion : q
          ),
          activeQuestion: realQuestion._id,
        }));
      } catch (error: any) {
        // 4. Roll back on error
        useDataStore.setState((state) => ({
          questions: state.questions!.filter((q) => q._id !== tempId),
          activeQuestion: state.questions?.[0]?._id || null,
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

      // 1. Snapshot current list
      const oldList = questions || [];
      const oldActive = activeQuestion;

      // 2. Remove immediately
      useDataStore.setState((state) => {
        const newList = state.questions!.filter((q) => q._id !== questionId);
        return {
          questions: newList,
          activeQuestion:
            state.activeQuestion === questionId
              ? newList[0]?._id || null
              : state.activeQuestion,
        };
      });

      try {
        setStatus("deleting");
        await deleteQuestion(questionId);
      } catch (error: any) {
        // 3. Roll back on error
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
  ///////  Update Selection Question //////

  const getIconByType = (type: Question["type"]): string => {
    return ICON[type];
  };

  const setActiveQuestion = (arg: Question) => {
    console.log("selecting", arg.type);
    useDataStore.setState({
      activeQuestion: arg._id,
    });
  };

  const updateSelectedQuestion = (arg: Question) => {
    useDataStore.setState({
      questions: [...questions].map((el) => (el._id === arg._id ? arg : el)),
    });
  };

  const addOptions = (option: QuestionOptions) => {
    useDataStore.setState({
      questions: [...questions].map((el) =>
        el._id === selectedQuestionId
          ? { ...el, options: [...el.options, option] }
          : el
      ),
    });
  };

  const removeOption = (optionId: string) => {
    useDataStore.setState({
      questions: [...questions].map((el) =>
        el._id === selectedQuestionId
          ? {
              ...el,
              options: el.options.filter((option) => option.id !== optionId),
            }
          : el
      ),
    });
  };

  const updateOption = (option: QuestionOptions) => {
    useDataStore.setState({
      questions: [...questions].map((el) =>
        el._id === selectedQuestionId
          ? {
              ...el,
              options: el.options.map((opt) =>
                opt.id === option.id ? option : opt
              ),
            }
          : el
      ),
    });
  };

  return {
    loading: status == "loading",
    updating: status == "updating",
    deleting: status == "deleting",
    selectedQuestion,
    selectedQuestionIndex,
    questions,
    initializeQuestions,
    addQuestionHandler,
    deleteQuestionHandler,
    setActiveQuestion,
    updateSelectedQuestion,
    getIconByType,
    addOptions,
    removeOption,
    updateOption,
  };
}
