import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


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


BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    newBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;