"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createTaskAction = async (formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("task-description") as string,
    priority: formData.get("priority") as string,
  };

  const createdTask = await prisma.task.create({
    data,
  });

  if (!createdTask) {
    return redirect("/create-new-task");
  }

  redirect("/");
};
