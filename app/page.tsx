import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import clsx from "clsx";
import Image from "next/image";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <section className="h-full p-4">
      <h1 className="font-black text-4xl my-10">Today&apos;s Tasks</h1>
      <ul className="grid grid-cols-4 gap-4 grid-flow-row  grid-rows-1">
        {tasks.map((task) => (
          <li key={task.id}>
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>
                  <h3 className="font-bold">{task.title}</h3>
                </CardTitle>
                <Badge
                  className={clsx({
                    "bg-red-500": task.priority === "urgent",
                    "bg-yellow-500": task.priority === "high",
                    "bg-blue-500": task.priority === "medium",
                    "bg-orange-500": task.priority === "low",
                  })}
                >
                  {task.priority}
                </Badge>
              </CardHeader>
              <CardContent>
                <p>{task.description}</p>
                <small className="text-slate-500">
                  {new Date(task.createdAt).toLocaleDateString()}
                </small>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
                <Button size="sm">Edit</Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </section>
  );
}
