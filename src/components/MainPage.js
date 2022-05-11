import React from 'react';
import BookShelf from './BookShelf';



const MainPage = ({ books, newBookShelf }) => {
    
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');

    return (
        <div>
            <div className="list-books-content">
                <div>
                    <BookShelf title='Currently Reading' books={currentlyReading} newBookShelf={newBookShelf}/>
                    <BookShelf title='Want To Read' books={wantToRead} newBookShelf={newBookShelf}/>
                    <BookShelf title='Read' books={read} newBookShelf={newBookShelf}/>
                </div>
            </div>

             {/* Referred to Router Lesson, Component Paths with Routes */}
            
                <div className="open-search">
                    
                        <button>Add a book</button>
                   
                </div> 
           
        </div>
    );
};

export default MainPage;