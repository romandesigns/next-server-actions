import React from "react";
import { ModeToggle } from "../themer";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function Navigation() {
  return (
    <div className="w-full p-4 border-b">
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-bold">
          TASKer
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/new"
              className={buttonVariants({ variant: "secondary" })}
            >
              Create Task
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}
