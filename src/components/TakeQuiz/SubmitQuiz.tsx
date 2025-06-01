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
import { DialogDescription } from "@radix-ui/react-dialog";
import useResult from "@/hooks/useResult";

type PropType = {
  open: boolean;
  onClose: () => void;
};

export default function SubmitQuiz({ open, onClose }: PropType) {
  const { onSubmit } = useResult();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await onSubmit();
    } catch (error: any) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="font-medium">Confirm Submission</DialogTitle>
          <DialogDescription className="font-light">
            Are you sure you want to submit? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="grid grid-cols-2 sm:flex items-start sm:justify-end gap-4">
            <Button
              disabled={loading}
              onClick={onClose}
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={handleSubmit}
              loading={loading}
            >
              Yes, Submit
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
