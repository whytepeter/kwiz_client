import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import toast from "react-hot-toast";
import TextInput from "../base/TextInput";
import { Button } from "../ui/button";
import { QuizTakerSchema } from "@/types/schemas";
import useWorkspace from "@/hooks/useWorkspace";
import { createQuiz } from "@/store/actions/quiz";
import { useRouter } from "next/navigation";
import { Quiz } from "@/types/quiz";

type PropType = {
  open: boolean;
  onClose: () => void;
  quiz: Quiz;
};

export default function TakeQuizUserInfo({ open, onClose, quiz }: PropType) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { selectedWorkspace } = useWorkspace();

  const form = useForm<z.infer<typeof QuizTakerSchema>>({
    resolver: zodResolver(QuizTakerSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof QuizTakerSchema>) {
    try {
      setLoading(true);

      const payload = {
        email: values.email,
        quizId: quiz._id,
      };

      handleClose();
      toast.success(`Quiz started successfully`);
    } catch (error: any) {
      toast.error(error?.message || "Error starting quiz");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    form.reset();
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="font-medium">Enter your details</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="w-full  mx-auto   text-dark-300 flex flex-col gap-3.5">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Quiz name</FormLabel>
                  <FormControl>
                    <TextInput
                      disabled={loading}
                      id="title"
                      placeholder="Name of your quiz"
                      error={error ? String(error.message) : ""}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <div className="flex items-start justify-end gap-4">
            <Button onClick={handleClose} type="button" variant="outline">
              Cancel
            </Button>
            <Button onClick={form.handleSubmit(onSubmit)} loading={loading}>
              Start Quiz
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
