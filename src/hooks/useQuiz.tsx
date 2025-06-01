import { getQuizById, updateQuiz } from "@/store/actions/quiz";
import { getThemes } from "@/store/actions/theme";
import { useDataStore } from "@/store/store";
import { LoadingStatus } from "@/types";
import { Quiz, UpdateQuiz } from "@/types/quiz";
import { useParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";

export default function useQuiz() {
  const [status, setStatus] = useState<LoadingStatus>("idle");
  const { quiz, questions, updateSaving, saving } = useDataStore();
  const { quiz_id } = useParams<{ quiz_id: string }>();

  const shareLink = useMemo(() => {
    const base = window.location.origin;
    return `${base}/quiz/${quiz_id}`;
  }, [quiz_id]);

  const selectedQuiz = useMemo(
    () => (quiz?._id == quiz_id ? quiz : null),
    [quiz_id, quiz]
  );

  const initializeQuiz = useCallback(
    async (onDone?: (quiz: Quiz | null) => void) => {
      if (!quiz_id || status == "loading") return;
      setStatus("loading");

      updateSaving(false);

      try {
        const res = await getQuizById(quiz_id);
        onDone?.(res);
        getThemes();
      } catch (error: any) {
        toast.error(error.message || "Error fetching quiz");
      } finally {
        setStatus("idle");
      }
    },
    [quiz_id, getQuizById, status]
  );

  const updateQuizHandler = useCallback(
    async (payload: UpdateQuiz) => {
      if (!payload || status == "loading") return;
      setStatus("updating");
      updateSaving(true);
      try {
        await updateQuiz(payload);
      } catch (error: any) {
        toast.error(error.message || "Error updating quiz");
      } finally {
        setStatus("idle");
        updateSaving(false);
      }
    },
    [status, updateQuiz]
  );

  const totalPoints = useMemo(() => {
    return questions?.reduce((sum, q) => (sum += q.points || 0), 0);
  }, [questions]);

  return {
    quiz: selectedQuiz,
    settings: selectedQuiz?.setting || null,
    totalPoints,
    shareLink,
    loading: status == "loading",
    updating: status == "updating",
    deleting: status == "deleting",
    saving,
    initializeQuiz,
    updateQuizHandler,
  };
}
