import { queryOptions } from "@tanstack/react-query";
import type { Todo } from "@/features/todos/types/todo.type";

export const createGetTodosQueryOptions = () => {
  return queryOptions({
    queryKey: ["[TODOS] GET_TODOS"],
    queryFn: async () => {
      const endpoint = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(endpoint);
      const data: Todo[] = await response.json();
      return data;
    },
  });
};
