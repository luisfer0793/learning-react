import { create } from "zustand/react";

export const useBooksState = create((setState) => {
  return {
    books: [],
  };
});
