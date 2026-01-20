import { createFileRoute } from "@tanstack/react-router";
import { createGetTodosQueryOptions } from "@/features/todos/services/get-todos.service";
import { TodosPage } from "@/features/todos/pages/todos/todos-page.component";

export const Route = createFileRoute("/data-fetching")({
  component: TodosPage,
  errorComponent: () => <p>Error loading todos!</p>,
  pendingComponent: () => <p>Loading...</p>,
  loader: ({ context: { queryClient } }) => {
    const queryOptions = createGetTodosQueryOptions();

    return queryClient.ensureQueryData(queryOptions);
  },
});
