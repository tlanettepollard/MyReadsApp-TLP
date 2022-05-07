import React from 'react';
import Book from './Book';
//import PropTypes from 'prop-types';


const BookShelf = ({ books, title, updateBookShelf }) => {
    /*Referred to L3 State Management, L3 Passing Data 1 and 2 to map through the list of books */

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                changeBookShelf={updateBookShelf}
                            />
                    </li> 
                    ))}   
                </ol>
            </div>
        </div>
    );
};

/*BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    //changeBookShelf: PropTypes.func.isRequired
};*/


export default BookShelf; 

