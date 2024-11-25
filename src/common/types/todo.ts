import { UseFormReturn } from "react-hook-form";
import { FormSchema } from "../schema/form-schema";
import { z } from "zod";

export type TStatus = 'Pending' | 'In Progress' | 'Completed'

export type TTodoItem = {
  id: string;
  title: string;
  description: string;
  status: TStatus;
  due_date: string;
};

export type TRowActions = {
  onEdit: (arg: TTodoItem) => void;
  onDelete: (arg: TTodoItem) => void;
};

export type TTodoForm = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
  openDialog: boolean;
  title: string;
  description?: string;
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
  toggleDialog: (arg: boolean) => void;
}