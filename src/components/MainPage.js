import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


const MainPage = ({ books, updateBookShelf }) => {

    console.log(books);

    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
  
    return (
        <div>
            <div className="list-books-content">
                <div>
                    <BookShelf title='Currently Reading' books={currentlyReading} updateBookShelf={updateBookShelf}/>
                    <BookShelf title='Want to Read' books={wantToRead} updateBookShelf={updateBookShelf}/>
                    <BookShelf title='Read' books={read} updateBookShelf={updateBookShelf}/>
                </div>
            </div>
            
            {/* Referred to Router Lesson, Component Paths with Routes */}
            <div className="open-search">
                <Link to='/search-page'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );
};

export default MainPage;