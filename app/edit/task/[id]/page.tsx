import { CreateTaskForm } from "@/app/new/component/CreateTaskForm";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const task = await prisma.task.findUnique({
    where: {
      id: id as string,
    },
  });

  if (!task) {
    redirect("/");
  }

  console.log(task);
  return (
    <section className="h-full p-4 grid grid-cols-1 grid-rows-[auto_1fr]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/task/edit/${id}`}>Edit Task</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-center items-center flex-col">
        <h1 className="font-black text-4xl my-10">Edit your Task!</h1>
        <CreateTaskForm btnText="Save Task" task={task} />
      </div>
    </section>
  );
}
