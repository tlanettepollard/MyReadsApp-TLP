import React from 'react';
import Book from './Book';


const BookShelf = ({ books, title, updateBookShelf }) => {
    /*Referred to L3 State Management, L3 Passing Data 1 and 2 to map through the list of books */

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(b => (
                        <li key={b.id}>
                            <Book book={b} changeBookShelf={updateBookShelf}/>
                    </li> 
                    ))}   
                </ol>
            </div>
        </div>
    );
};

export default BookShelf; 

