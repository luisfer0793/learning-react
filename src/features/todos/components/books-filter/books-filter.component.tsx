import { type ChangeEvent, type FormEvent, useState } from "react";

export type Category = "title" | "userId";

type Handler = (options: { category: Category; search: string } | null) => void;

type Props = {
  handler: Handler;
};

export const BooksFilter = ({ handler }: Props) => {
  const [category, setCategory] = useState<Category>("title");
  const [search, setSearch] = useState("");

  const onCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCategory(value as Category);
  };

  const onSearchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!search) {
      handler(null);
      return;
    }

    handler({ category, search });
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex items-center gap-2">
      <select
        name="category"
        value={category}
        onChange={onCategoryChangeHandler}
        className="border border-gray-200 py-2 px-4 rounded-sm"
      >
        <option value="title">Title</option>
        <option value="userId">User ID</option>
      </select>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onSearchChangeHandler}
        className="border border-gray-200 py-2 px-4 rounded-sm"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-sm"
      >
        Filter
      </button>
    </form>
  );
};
