import { createFileRoute } from "@tanstack/react-router";
import { TodosPage } from "@/features/todos/pages/todos/todos-page.component";
import { createGetTodosQueryOptions } from "@/features/todos/services/get-todos.service";

export const Route = createFileRoute("/")({
  component: TodosPage,
  errorComponent: () => <p>Error loading todos!</p>,
  pendingComponent: () => <p>Loading...</p>,
  loader: ({ context: { queryClient } }) => {
    const queryOptions = createGetTodosQueryOptions();

    return queryClient.ensureQueryData(queryOptions);
  },
});
