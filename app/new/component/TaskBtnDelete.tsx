import React from "react";
import { Button } from "@/components/ui/button";
import { deleteTaskAction } from "../action/deleteTaskAction";

export function TaskBtnDelete({ taskId }: { taskId: string }) {
  return (
    <form>
      <input type="text" name="id" value={taskId} className="hidden" />
      <Button variant="destructive" size="sm" formAction={deleteTaskAction}>
        Delete
      </Button>
    </form>
  );
}
