import { createFileRoute } from "@tanstack/react-router";
import { createGetBooksQueryOptions } from "@/features/books/services/get-books.service";
import { BooksPage } from "@/features/books/pages/books/books-page.component";

export const Route = createFileRoute("/books")({
  component: BooksPage,
  errorComponent: () => (
    <p className="py-4 text-red-500 text-center">Error loading todos!</p>
  ),
  pendingComponent: () => <p>Loading...</p>,
  loader: ({ context: { queryClient } }) => {
    const queryOptions = createGetBooksQueryOptions();

    return queryClient.ensureQueryData(queryOptions);
  },
});
