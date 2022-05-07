import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


const MainPage = ({ books, changeBookShelf}) => {


    console.log(books);
  

    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
  
    return (
        <div>
            <div className="list-books-content">
                <div>
                    <BookShelf title='Currently Reading' books={currentlyReading} onChangeShelf={changeBookShelf}/>
                    <BookShelf title='Want to Read' books={wantToRead}  onChangeShelf={changeBookShelf}/>
                    <BookShelf title='Read' books={read} onChangeShelf={changeBookShelf} />
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