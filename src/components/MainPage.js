import React from 'react';
import Book from './Book';


const MainPage = () => {
    return (
        <div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <Book />
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <Book />
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <Book />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="open-search">
                <button>Add a book</button>
            </div>
        </div>
    );
};

export default MainPage;