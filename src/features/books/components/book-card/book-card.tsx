import { type Book } from "@/features/books/types/book.type";

type Props = {
  book: Book;
};

export const BookCard = ({ book }: Props) => {
  return (
    <article className="border border-gray-200 p-4 flex flex-col gap-2 rounded-sm">
      <h6 className="font-bold text-center">{book.title}</h6>
      <p className="text-center text-sm">Author: {book.author}</p>
      <p className="text-center text-sm">Pages: {book.pages}</p>
    </article>
  );
};
