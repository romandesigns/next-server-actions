"use server";

const date = new Date();
const formattedDate = date.toLocaleDateString("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const createTask = (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    description: formData.get("task-description"),
    priority: formData.get("priority"),
    createdAt: formattedDate,
  };
  console.log({ data });
};
