import EmptyState from "@/components/base/EmptyState";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="h-screen w-full ">
      <EmptyState title="There’s not a quiz in sight" description="">
        <Button>
          <i className="pi pi-plus" />
          Create a new quiz
        </Button>
      </EmptyState>
    </div>
  );
}
