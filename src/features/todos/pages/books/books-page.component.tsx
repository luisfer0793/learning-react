import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createGetBooksQueryOptions } from "@/features/todos/services/get-books.service";
import {
  type Category,
  BooksFilter,
} from "@/features/todos/components/books-filter/books-filter.component";

type Filters = {
  category: Category;
  search: string;
};

export const BooksPage = () => {
  const { data: _books } = useSuspenseQuery(createGetBooksQueryOptions());

  const [filters, setFilters] = useState<Filters | null>(null);

  const books = useMemo(() => {
    if (!filters) return _books;

    const { category, search } = filters;

    return _books.filter((book) => {
      if (category === "title") {
        return book.title.toLowerCase().includes(search.toLowerCase());
      }
      if (category === "userId") {
        return book.userId.toString() === search;
      }
      return false;
    });
  }, [filters, _books]);

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold text-center">My Todos</h1>
      <BooksFilter handler={setFilters} />
      <hr className="text-gray-200" />
      <div className="grid grid-cols-6 gap-4">
        {books.map((book) => (
          <article
            key={book.id}
            className="border border-gray-200 p-4 flex flex-col gap-2"
          >
            <h6 className="font-bold text-center">{book.title}</h6>
            <p className="text-center">User ID: {book.userId}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
