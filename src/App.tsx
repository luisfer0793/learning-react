import { useFetch } from "@/shared/hooks/use-fetch.hook";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const App = () => {
  const { data, isLoading, isError } = useFetch<Todo[]>({
    endpoint: "https://jsonplaceholder.typicode.com/todos",
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return (
      <div>
        <h2 className="text-4xl font-bold text-center">Error fetching todos</h2>
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center pb-4">Hello World</h1>
      <div className="grid grid-cols-6 gap-4">
        {data?.map((todo) => (
          <aside key={todo.id} className="border border-gray-200 p-4">
            <h6>{todo.title}</h6>
          </aside>
        ))}
      </div>
    </div>
  );
};
