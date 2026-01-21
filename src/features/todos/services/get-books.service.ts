import { queryOptions } from "@tanstack/react-query";
import type { Book } from "@/features/todos/types/book.type";

export const createGetBooksQueryOptions = () => {
  return queryOptions({
    queryKey: ["[BOOKS] GET_BOOKS"],
    queryFn: async () => {
      const endpoint = "http://localhost:3000/books";
      const response = await fetch(endpoint);
      const data: Book[] = await response.json();
      return data;
    },
  });
};
