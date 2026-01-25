export const BookCategory = {
  Title: "title",
  Author: "author",
} as const;

export type BookCategory = (typeof BookCategory)[keyof typeof BookCategory];

export const SortBy = {
  Title: "title",
  Author: "author",
  Year: "year",
  Pages: "pages",
} as const;

export type SortBy = (typeof SortBy)[keyof typeof SortBy];

export const SortCriteria = {
  Asc: "asc",
  Desc: "desc",
} as const;

export type SortCriteria = (typeof SortCriteria)[keyof typeof SortCriteria];
