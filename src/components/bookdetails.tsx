import React from "react";
import {Book} from "./book";


export interface BookDetailsProps{
    book: Book;
    onClose: () => void;
}

const BookDetails: React.FC<BookDetailsProps> = ({book, onClose}) => {
    return(
        <div className="book-details">
            <h2>Detalhes do Livro</h2>
            <p>Título: {book.title}</p>
            <p>Autor: {book.author}</p>
            <p>Ano de Publicação: {book.publicationYear}</p>
            <p>Data de Cadastro: {book.dateAdded}</p>
            <p>Gênero: {book.genre}</p>
            <p>Descrição: {book.description}</p>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
};

export default BookDetails;
