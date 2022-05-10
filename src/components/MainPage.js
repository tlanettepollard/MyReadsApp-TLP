import React from 'react';
import BookShelf from './BookShelf';



const MainPage = () => {

    return (
        <div>
            <div className="list-books-content">
                <div>
                    <BookShelf />
                    <BookShelf />
                    <BookShelf />
                </div>
            </div>
            <div className="open-search">
                <button>Add a book</button>
            </div> 
        </div>
    );
};

export default MainPage;