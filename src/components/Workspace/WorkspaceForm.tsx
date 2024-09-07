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

type PropType = {
  open: boolean;
  setOpen: (val: boolean) => void;
  edit?: boolean;
};

export default function WorkspaceForm({
  open,
  setOpen,
  edit = false,
}: PropType) {
  const [loading, setLoading] = useState(false);
  const { selectedWorkspace, setSelectedWorkspace } = useWorkspace();

  const form = useForm<z.infer<typeof workspaceSchema>>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof workspaceSchema>) {
    try {
      setLoading(true);

      if (edit) {
        const payload = {
          title: values.title,
          workspaceId: selectedWorkspace?._id!,
        };
        await editWorkspace(payload);
      } else {
        const res = await createWorkspace(values.title);
        setSelectedWorkspace(res);
      }

      handleClose();
      toast.success(`Workspace ${edit ? "updated" : "created"} successfully`);
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
            {edit ? "Rename workspace" : "Create a new workspace"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="w-full  mx-auto   text-dark-300 flex flex-col gap-3.5">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Workspace name</FormLabel>
                  <FormControl>
                    <TextInput
                      id="title"
                      placeholder="Name of your workspace"
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
              {edit ? "Update workspace" : "Create workspace"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
