import { TRowActions, TTodoItem } from "@/common/types/todo";
import RowActions from "./row-actions";
import { ColumnDef } from "@tanstack/react-table";
import { format, isBefore } from "date-fns";

export const getTodoColumns: (
  args: TRowActions
) => ColumnDef<TTodoItem>[] = (args) => {
  return [
    {
      accessorKey: "title",
      header: "Task",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "due_date",
      header: "Due Date",
      cell: ({ row }) => {
        const data = format(row.getValue("due_date"), "PP");
        const currentDate = new Date();
        return isBefore(data, currentDate) ? <span className="text-[#ff0000]">
          {data}
        </span> : data
      },
    },
    {
      id: "actions",
      enableHiding: false,
      size: 50,
      cell: ({ row }) => (
        <div className="text-right">
          <RowActions
            data={row.original}
            onEdit={args.onEdit}
            onDelete={args.onDelete}
          />
        </div>
      ),
    },
  ];
};
