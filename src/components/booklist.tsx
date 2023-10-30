import React from "react";
import {Book} from "./book";

export interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
  onViewDetails: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete, onViewDetails }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.author} ({book.publicationYear})
          <button onClick={() => onEdit(book)}>Editar</button>
          <button onClick={() => onDelete(book.id)}>Excluir</button>
          <button onClick={() => onViewDetails(book)}>Ver Detalhes</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
