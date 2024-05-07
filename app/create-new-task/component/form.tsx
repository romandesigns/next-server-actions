import * as React from "react";

import { Button } from "@/components/ui/button";
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
import { createTask } from "../action/createTask";

export function CreateTaskForm() {
  return (
    <Card className="w-[350px]">
      <form>
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
              <Input id="title" name="title" placeholder="Name of your task" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="task-description">Description</Label>
              <Textarea
                name="task-description"
                id="task-description"
                placeholder="Type your task description here."
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority">
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
          <Button variant="outline">Cancel</Button>
          <Button type="submit" formAction={createTask}>
            Deploy
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
