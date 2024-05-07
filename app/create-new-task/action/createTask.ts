"use server";

export const createTask = (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    description: formData.get("task-description"),
    priority: formData.get("priority"),
  };
};
