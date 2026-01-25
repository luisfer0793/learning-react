import { type ChangeEvent } from "react";
import {
  SortBy,
  SortCriteria,
} from "@/features/books/types/book-categories.type";

type SortOptions = {
  field: SortBy;
  criteria: SortCriteria;
};

type Props = {
  handler: (options: SortOptions) => void;
  sortOptions: SortOptions;
};

export const BooksSort = ({ handler, sortOptions }: Props) => {
  const onFieldChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    handler({ ...sortOptions, field: value as SortBy });
  };

  const onOrderChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    handler({ ...sortOptions, criteria: value as SortCriteria });
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">Sort by:</label>
      <select
        name="sortField"
        value={sortOptions.field}
        onChange={onFieldChangeHandler}
        className="border border-gray-200 py-2 px-4 rounded-sm"
      >
        <option value={SortBy.Title}>Title</option>
        <option value={SortBy.Author}>Author</option>
        <option value={SortBy.Year}>Year</option>
        <option value={SortBy.Pages}>Pages</option>
      </select>
      <select
        name="sortOrder"
        value={sortOptions.criteria}
        onChange={onOrderChangeHandler}
        className="border border-gray-200 py-2 px-4 rounded-sm"
      >
        <option value={SortCriteria.Asc}>Ascending</option>
        <option value={SortCriteria.Desc}>Descending</option>
      </select>
    </div>
  );
};
