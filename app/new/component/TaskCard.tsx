import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Task } from "@prisma/client";
import { TaskBtnDelete } from "./TaskBtnDelete";
import Link from "next/link";

export function TaskCard({
  title,
  description,
  priority,
  createdAt,
  id,
}: Task) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="font-bold">{title}</CardTitle>
        <Badge
          className={clsx({
            "bg-red-500": priority === "urgent",
            "bg-yellow-500": priority === "high",
            "bg-blue-500": priority === "medium",
            "bg-orange-500": priority === "low",
          })}
        >
          {priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <small className="text-slate-500">
          {new Date(createdAt).toLocaleDateString()}
        </small>
      </CardContent>
      <CardFooter className="space-x-2">
        <TaskBtnDelete taskId={id} />
        <Link
          href={`/edit/task/${id}`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}
