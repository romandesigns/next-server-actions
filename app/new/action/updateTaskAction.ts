"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const updateTaskAction = async (formData: FormData) => {
  const data = {
    id: formData.get("taskId") as string,
    title: formData.get("title") as string,
    description: formData.get("task-description") as string,
    priority: formData.get("priority") as string,
  };

  const udpatedTask = await prisma.task.update({
    where: {
      id: formData.get("taskId") as string,
    },
    data,
  });

  if (!udpatedTask) {
    return redirect(`/edit/task/${data.id}`);
  }

  redirect(`/`);
};
