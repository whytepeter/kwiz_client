import React, { useState } from "react";

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
import { Quiz } from "@/types/quiz";
import { useDataStore } from "@/store/store";
import { confirmEmail } from "@/store/actions/results";

type PropType = {
  open: boolean;
  onClose: () => void;
  onDone?: () => void;
  quiz: Quiz;
};

export default function TakeQuizUserInfo({
  open,
  onClose,
  onDone,
  quiz,
}: PropType) {
  const dataStore = useDataStore();
  const [loading, setLoading] = useState(false);
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

      const res = await confirmEmail(payload);
      if (res?.exist) {
        throw new Error("This email has taken this quiz already");
      }

      dataStore.setState({
        quizTaker: {
          ...values,
        },
        answeredQuestions: [],
      });
      onDone?.();
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
          <form className="w-full  mx-auto   text-dark-300 flex flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <TextInput
                      disabled={loading}
                      id="name"
                      placeholder="Enter name"
                      error={error ? String(error.message) : ""}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <TextInput
                      type="email"
                      inputMode="email"
                      disabled={loading}
                      id="title"
                      placeholder="Enter email"
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
