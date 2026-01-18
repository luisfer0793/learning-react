import { useSuspenseQuery } from "@tanstack/react-query";
import { createGetTodosQueryOptions } from "@/features/todos/services/get-todos.service";

export const TodosPage = () => {
  const { data: todos } = useSuspenseQuery(createGetTodosQueryOptions());

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center pb-4">Hello World</h1>
      <div className="grid grid-cols-6 gap-4">
        {todos.map((todo) => (
          <aside key={todo.id} className="border border-gray-200 p-4">
            <h6>{todo.title}</h6>
          </aside>
        ))}
      </div>
    </div>
  );
};
