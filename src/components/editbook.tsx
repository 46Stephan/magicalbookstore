import React, {useState} from 'react';
import {Book} from './book';

export interface EditBookProps {
    book: Book;
    onSave: (book: Book) => void;
    onCancel: () => void;
}

const EditBook: React.FC<EditBookProps> = ({ book, onSave, onCancel }) => {
    const [editedBook, setEditedBook] = useState(book);
  
    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedBook({ ...editedBook, [name]: value });
    };
  
    const handleSave = () => {
      onSave(editedBook);
    };
  
    return (
      <div>
        <h2>Editar Livro</h2>
        <input
          type="text"
          name="title"
          value={editedBook.title}
          onChange={handleFieldChange}
          placeholder="Título"
        />
        <input
          type="text"
          name="author"
          value={editedBook.author}
          onChange={handleFieldChange}
          placeholder="Autor"
        />
        <input
          type="number"
          name="publicationYear"
          value={editedBook.publicationYear}
          onChange={handleFieldChange}
          placeholder="Ano de Publicação"
        />
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    );
  };
  
  export default EditBook;