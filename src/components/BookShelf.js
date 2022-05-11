import React from 'react';
import Book from './Book';


const BookShelf = ({ books, title, newBookShelf }) => {
    

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((b) => (
                        <li key={b.id}>
                            <Book book={b} newBookShelf={newBookShelf}/>
                        </li>
                    ))}
                    
                    
                </ol>
            </div>
        </div>
    );
};


export default BookShelf;