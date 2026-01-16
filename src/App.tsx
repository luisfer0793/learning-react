import { AddTodoForm } from "@/features/todos/components/add-todo-form/add-todo-form.component";

export const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center pb-4">Hello World</h1>
      <AddTodoForm />
    </div>
  );
};
