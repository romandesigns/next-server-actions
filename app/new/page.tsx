import React from "react";
import { CreateTaskForm } from "./component/CreateTaskForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <section className="h-full p-4 grid grid-cols-1 grid-rows-[auto_1fr]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/new`}>New Task</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-black text-4xl my-10">Create your new Task!</h1>
        <CreateTaskForm />
      </div>
    </section>
  );
}
