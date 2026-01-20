import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createGetTodosQueryOptions } from "@/features/todos/services/get-todos.service";
import {
  type Category,
  TodoFilter,
} from "@/features/todos/components/todo-filter/todo-filter.component";

type Filters = {
  category: Category;
  search: string;
};

export const TodosPage = () => {
  const { data: todos } = useSuspenseQuery(createGetTodosQueryOptions());

  const [filters, setFilters] = useState<Filters | null>(null);

  const filteredTodos = useMemo(() => {
    if (!filters) return todos;

    const { category, search } = filters;

    return todos.filter((todo) => {
      if (category === "title") {
        return todo.title.toLowerCase().includes(search.toLowerCase());
      }
      if (category === "userId") {
        return todo.userId.toString() === search;
      }
      return false;
    });
  }, [filters, todos]);

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold text-center">My Todos</h1>
      <TodoFilter handler={setFilters} />
      <div className="grid grid-cols-6 gap-4">
        {filteredTodos.map((todo) => (
          <article
            key={todo.id}
            className="border border-gray-200 p-4 flex flex-col gap-2"
          >
            <h6 className="font-bold text-center">{todo.title}</h6>
            <p className="text-center">User ID: {todo.userId}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
