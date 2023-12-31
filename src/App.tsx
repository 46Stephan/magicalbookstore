import React, { useState } from 'react';
import {Book} from './components/book';
import EditBook from './components/editbook';
import './App.css';



const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    publicationYear: 0,
    dateAdded: "",
    genre: "",
    description: "",
  });

  const [] = useState<Book | null>(null);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.publicationYear) {
      if (newBook.publicationYear <= new Date().getFullYear()) {
        const updatedBooks = [...books];
        newBook.id = books.length + 1;
        newBook.dateAdded = new Date().toLocaleDateString();
        updatedBooks.push(newBook);
        setBooks(updatedBooks);
        setNewBook({
          id: 0,
          title: "",
          author: "",
          publicationYear: 0,
          dateAdded: "",
          genre: "",
          description: "",
        });
      } else {
        alert("O ano de publicação não pode ser no futuro.");
      }
    } else {
      alert("Todos os campos são obrigatórios.");
    }
  };


  const handleDeleteBook = (id: number) => {
    if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    }
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
  
  }

  const handleUpdateBook = (updatedBook: Book) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setEditingBook(null);
  };

  return (
    <div>
      <h1>Magical BookStore</h1>
      <div>
        <h2>Adicionar Novo Livro</h2>
        <input
          type="text"
          placeholder="Título"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Autor"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Ano de Publicação"
          value={newBook.publicationYear}
          onChange={(e) =>
            setNewBook({ ...newBook, publicationYear: parseInt(e.target.value) })
          }
        />
        <button onClick={handleAddBook}>Adicionar</button>
      </div>
      <div>
        <h2>Lista de Livros</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{book.title} - {book.author} ({book.publicationYear})</span>
                <button onClick={() => handleEditBook(book)}>Editar</button>
                <button onClick={() => handleDeleteBook(book.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {editingBook && (
        <EditBook book={editingBook} onUpdateBook={handleUpdateBook} />
      )}
    </div>
  );
};

export default App;
