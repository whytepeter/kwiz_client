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
import { workspaceSchema } from "@/types/schemas";
import { useDataStore } from "@/store/store";
import { createWorkspace, editWorkspace } from "@/store/actions/workspace";
import useWorkspace from "@/hooks/useWorkspace";
import { createQuiz } from "@/store/actions/quiz";
import { useRouter } from "next/navigation";
import useQuiz from "@/hooks/useQuiz";

type PropType = {
  open: boolean;
  setOpen: (val: boolean) => void;
  edit?: boolean;
};

export default function AddQuiz({ open, setOpen, edit = false }: PropType) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { selectedWorkspace } = useWorkspace();
  const { setSelectedQuiz } = useQuiz();

  const form = useForm<z.infer<typeof workspaceSchema>>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof workspaceSchema>) {
    try {
      setLoading(true);

      const payload = {
        title: values.title,
        workspaceId: selectedWorkspace?._id!,
      };

      if (edit) {
      } else {
        const res = await createQuiz(payload);
        setSelectedQuiz(res);
        router.push(`${selectedWorkspace?._id}/quiz/${res._id}?tab=create`);
      }

      handleClose();
      toast.success(`Quiz ${edit ? "updated" : "created"} successfully`);
    } catch (error: any) {
      toast.error(error?.message || "Error creating workspace");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    form.reset();
    setOpen(false);
  }

  useEffect(() => {
    if (edit) {
      form.setValue("title", selectedWorkspace?.title || "");
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="font-medium">
            {edit ? "Rename quiz" : "Create a new quiz"}
          </DialogTitle>
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
              {edit ? "Update quiz" : "Create quiz"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
