import { useDataStore } from "@/store/store";
import { CreateQuestion, Question, QuestionOptions } from "@/types/question";
import { useCallback, useMemo, useState } from "react";
import { LoadingStatus } from "@/types";
import { createQuestion, getQuestionsByQuiz } from "@/store/actions/questions";
import toast from "react-hot-toast";

const ICON = {
  MULTIPLE_CHOICE: "/icons/multi_choice.svg",
  "YES/NO": "/icons/yes_no.svg",
  SHORT_ANSWER: "/icons/short_answer.svg",
};

export default function useQuestion() {
  const [status, setStatus] = useState<LoadingStatus>("idle");
  const { selectedQuestionId, questions } = useDataStore();

  const selectedQuestionIndex = useMemo(() => {
    const index = questions.findIndex((el) => el._id == selectedQuestionId);
    return index !== -1 ? index : undefined;
  }, [selectedQuestionId]);

  const selectedQuestion = useMemo(() => {
    if (selectedQuestionIndex == undefined) return;
    return questions[selectedQuestionIndex];
  }, [selectedQuestionIndex, questions]);

  const initializeQuestions = useCallback(
    async (quiz_id: string) => {
      if (!quiz_id || status == "loading") return;
      setStatus("loading");
      try {
        const res = await getQuestionsByQuiz(quiz_id);
        if (!selectedQuestion && res?.length) {
          setSelectedQuestion(res[0]);
        }
      } catch (error: any) {
        toast.error(error?.message || "Error fetching questions");
      } finally {
        setStatus("idle");
      }
    },
    [getQuestionsByQuiz, status, selectedQuestion]
  );

  const addQuestionHandler = useCallback(async (payload: CreateQuestion) => {
    if (!payload || status == "updating") return;

    try {
      setStatus("updating");
      await createQuestion(payload);
    } catch (error: any) {
      toast.error(error?.message || "Error adding question");
    } finally {
      setStatus("idle");
    }
  }, []);

  ///////  Update Selection Question //////

  const getIconByType = (type: Question["type"]): string => {
    return ICON[type];
  };

  const setSelectedQuestion = (arg: Question) => {
    useDataStore.setState({
      selectedQuestionId: arg._id,
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
    selectedQuestion,
    selectedQuestionIndex,
    questions,
    initializeQuestions,
    addQuestionHandler,
    setSelectedQuestion,
    updateSelectedQuestion,
    getIconByType,
    addOptions,
    removeOption,
    updateOption,
  };
}
