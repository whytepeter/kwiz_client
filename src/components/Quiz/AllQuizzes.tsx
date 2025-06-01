"use client";
import React, { useEffect, useMemo, useState } from "react";
import TextInput from "../base/TextInput";
import { getAllQuizes } from "@/store/actions/quiz";
import { Quiz } from "@/types/quiz";
import toast from "react-hot-toast";
import Spinner from "../base/Spinner";
import { initials } from "@/lib/utils";
import debounce from "lodash/debounce";
import { ProgressBar } from "primereact/progressbar";
import { useRouter } from "next/navigation";

export default function AllQuizzes() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  //pagination
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);

  // Fetch quizzes, optionally with a search term
  const fetchQuizzes = async (search = "") => {
    try {
      setLoading(true);
      const res = await getAllQuizes({ page, search: search?.toLowerCase() }); // assume API supports { page, search }
      if (res) {
        setQuizzes(res.data || []);
        setTotalRecords(res.totalRecords || 0);
        setTotalPage(res.totalPages || 0);
      }
    } catch (error: any) {
      toast.error(error?.message || "Error fetching quizzes");
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchQuizzes("");
  }, [page]);

  // Debounced version of fetchQuizzes
  const debouncedFetch = useMemo(
    () =>
      debounce((term: string) => {
        setPage(1); // reset to first page when searching
        fetchQuizzes(term);
      }, 500),
    []
  );

  // Watch searchTerm and trigger debounced fetch
  useEffect(() => {
    debouncedFetch(searchTerm.trim());
  }, [searchTerm, debouncedFetch]);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  const openQuiz = (quiz_id: string) => {
    if (!quiz_id) return;
    router.push(`/q/${quiz_id}`);
  };

  return (
    <>
      {loading && (
        <ProgressBar
          mode="indeterminate"
          className="fixed h-1 top-0 left-0 w-full"
        />
      )}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
          <h2 className="text-lg md:text-2xl  font-medium text-primary">
            All Published <span className="text-secondary">Quizzes</span>
          </h2>

          <div className="w-full sm:max-w-sm">
            <TextInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title"
              leftIcon={<i className="pi pi-search" />}
            />
          </div>
        </div>

        {loading && !quizzes?.length && (
          <Spinner size={24} className="mx-auto py-6" />
        )}

        <div className="flex items-center gap-4 mg:gap-5 ">
          {quizzes?.map((quiz) => (
            <div
              onClick={() => openQuiz(quiz._id)}
              className="cursor-pointer aspect-[6/4] w-full max-w-[300px] text-dark-300  border border-outline rounded-xl overflow-hidden bg-background flex flex-col "
            >
              <div className="flex-shrink-0 text-2xl flex-1 w-full h-auto bg-accent text-secondary-dark  flex items-center justify-center font-medium">
                {initials(quiz.title)}
              </div>

              <div className="flex items-center justify-between gap-2 py-3 px-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="line-clamp-2 text-sm lg:text-base">
                    {quiz?.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
