import prisma from "@/lib/prisma";
import Image from "next/image";
import { TaskCard } from "./new/component/TaskCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <section className="h-full p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="font-black text-4xl my-10">Today&apos;s Tasks</h1>
      <ul className="grid grid-cols-4 gap-4 grid-flow-row  grid-rows-1">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard {...task} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    </section>
  );
}
