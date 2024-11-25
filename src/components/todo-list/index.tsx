import { PlusIcon } from "lucide-react";
import { DataTable } from "../data-table";
import { Button } from "../ui/button";
import { TodoForm } from "./form";
import useViewModel from "./useViewModel";

/**
 * Displays the list of tasks. You can add,edit and delete tasks.
 * @returns JSX Element
 */
const TodoList = () => {
  const { model, actions } = useViewModel();
  return ( <div>
    <div className="w-[400px] py-4">
      <Button onClick={actions.onAdd}>
        <PlusIcon className="mr-2 h-4 w-4" />
        Add Task
      </Button>
      <TodoForm
        title={model.formTitle}
        onSubmit={actions?.onSubmit}
        form={model?.form}
        openDialog={model?.openAddDialog}
        toggleDialog={actions?.setOpenAddDialog}
      />
    </div>
    <DataTable
      columns={model?.columns}
      data={model?.data}
     />
  </div> );
}
 
export default TodoList;