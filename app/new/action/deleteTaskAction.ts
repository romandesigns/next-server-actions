"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTaskAction = async (formData: FormData) => {
  const data = {
    id: formData.get("id") as string,
  };

  const createdTask = await prisma.task.delete({
    where: {
      id: data.id,
    },
  });

  if (!createdTask) {
    return redirect("/create-new-task");
  }

  revalidatePath("/");
};
