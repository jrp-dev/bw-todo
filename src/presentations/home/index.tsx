'use client';
import { APP_TITLE } from "@/common/constants";
import TodoList from "@/components/todo-list";

const HomePresentation = () => {
  return (
    <div className="p-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-2">
        {APP_TITLE}
      </h3>
        <TodoList />
    </div>
   );
}
 
export default HomePresentation;