import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createGetBooksQueryOptions } from "@/features/books/services/get-books.service";
import { BooksFilter } from "@/features/books/components/books-filter/books-filter.component";
import { BooksSort } from "@/features/books/components/books-sort/books-sort.component";
import {
  BookCategory,
  SortBy,
  SortCriteria,
} from "@/features/books/types/book-categories.type";
import { BookCard } from "@/features/books/components/book-card/book-card";
import type { Book } from "@/features/books/types/book.type";

type Filters = {
  category: BookCategory;
  search: string;
};

type SortOptions = {
  field: SortBy;
  criteria: SortCriteria;
};

export const BooksPage = () => {
  const { data: _books } = useSuspenseQuery(createGetBooksQueryOptions());

  const [filters, setFilters] = useState<Filters | null>(null);

  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: SortBy.Title,
    criteria: SortCriteria.Asc,
  });

  const books = useMemo(() => {
    let result = [..._books];

    // Apply filters
    if (filters) {
      const { category, search } = filters;
      result = result.filter((book) => {
        if (category === BookCategory.Title) {
          return book.title.toLowerCase().includes(search.toLowerCase());
        }
        if (category === BookCategory.Author) {
          return book.author.toLowerCase().includes(search.toLowerCase());
        }
        return false;
      });
    }

    // Apply sorting
    result.sort((bookA, bookB) => {
      const field = sortOptions.field as keyof Book;
      const aValue = bookA[field];
      const bValue = bookB[field];

      let comparison = 0;
      if (typeof aValue === "string" && typeof bValue === "string") {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        comparison = aValue - bValue;
      }

      return sortOptions.criteria === SortCriteria.Asc
        ? comparison
        : -comparison;
    });

    return result;
  }, [filters, sortOptions, _books]);

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold text-center">My Books</h1>
      <div className="flex justify-between items-center gap-4">
        <BooksFilter handler={setFilters} />
        <BooksSort handler={setSortOptions} sortOptions={sortOptions} />
      </div>
      <hr className="text-gray-200" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
        {books.map((book) => (
          <BookCard book={book} key={book.title + book.author} />
        ))}
      </div>
    </div>
  );
};
