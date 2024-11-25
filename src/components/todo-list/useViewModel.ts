import { TTodoItem } from "@/common/types/todo";
import { getTodoColumns } from "./columns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormSchema } from "@/common/schema/form-schema";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addTodo, removeTodo, updateTodo } from "@/lib/reducers/todo";
import { useState } from "react";

const useViewModel = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.todo?.list || []);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [currentId, setCurrentId] = useState<string | undefined>(undefined);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const defaultValues = {
    title: "",
    description: "",
    status: 'Pending',
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const onAdd = () => {
    setFormMode("create");
    form.reset(defaultValues);
    setOpenAddDialog(true);
  };

  const onEdit = (arg: TTodoItem) => {
    setFormMode("update");
    setCurrentId(arg.id);
    form.reset(arg);
    setOpenAddDialog(true);
  };

  const onDelete = (arg: TTodoItem) => {
    dispatch(removeTodo(arg))
  }

  const onSubmit = async (payload: z.infer<typeof FormSchema>) => {
    if (formMode === "update") {
      const updatePayload = {
        ...payload,
        id: currentId,
      };
      if (currentId) {
        dispatch(updateTodo(updatePayload))
      }
    }
    else {
      const addPayload = {
        ...payload,
        id: data?.length + 1,
      };
      dispatch(addTodo(addPayload))
    }
    setOpenAddDialog(false);
    form.reset();
  }

  const columns = getTodoColumns({ onEdit, onDelete });

  const formTitle = formMode === "update" ? "Update Task" : "Add Task";

  return {
    model: {
      columns,
      data,
      form,
      openAddDialog,
      formMode,
      formTitle,
      openDeleteDialog,
    },
    actions: {
      onSubmit,
      setOpenAddDialog,
      onEdit,
      onAdd,
      setOpenDeleteDialog,
    }
  };
}
 
export default useViewModel;