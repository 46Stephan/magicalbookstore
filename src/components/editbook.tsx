import React, { useState } from 'react';
import { Book } from './book';

interface EditBookProps {
  book: Book;
  onUpdateBook: (updatedBook: Book) => void;
}

const EditBook: React.FC<EditBookProps> = ({ book, onUpdateBook }) => {
  const [editedBook, setEditedBook] = useState<Book>(book);

  const handleSave = () => {
    onUpdateBook(editedBook);
  };

  return (
    <div>
      <h3>Edit Book</h3>
      <input
        type="text"
        value={editedBook.title}
        onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
      />
      <input
        type="text"
        value={editedBook.author}
        onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
      />
      <input
        type="number"
        value={editedBook.publicationYear}
        onChange={(e) => setEditedBook({ ...editedBook, publicationYear: parseInt(e.target.value) })}
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default EditBook;
