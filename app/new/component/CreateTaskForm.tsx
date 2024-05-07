import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createTaskAction } from "../action/createTaskAction";
import { updateTaskAction } from "../action/updateTaskAction";
import { Task } from "@prisma/client";
import Link from "next/link";

export function CreateTaskForm({
  btnText,
  task,
}: {
  btnText: string;
  task: Task;
}) {
  const functionAction = task?.id ? updateTaskAction : createTaskAction;

  return (
    <Card className="w-[350px]">
      <form>
        <input type="text" value={task?.id} name="taskId" className="hidden" />
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
          <CardDescription>
            Keep track and priotize your todos to improve your productivity!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Name</Label>
              <Input
                id="title"
                name="title"
                defaultValue={task?.title}
                placeholder="Name of your task"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="task-description">Description</Label>
              <Textarea
                defaultValue={task?.description || ""}
                name="task-description"
                id="task-description"
                placeholder="Type your task description here."
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue={task?.priority}>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className={buttonVariants({ variant: "secondary" })}>
            Cancel
          </Link>
          <Button type="submit" formAction={functionAction}>
            {btnText || "Create Task"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
