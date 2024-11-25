import { z } from "zod";

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  status: z.string({
    required_error: 'Status is required',
  }),
  due_date: z.string({
    required_error: "Due date is required",
  }),
});
