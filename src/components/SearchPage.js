import React from 'react';
//import Book from './Book';
import { Link } from 'react-router-dom';
//import * as BooksAPI from '../BooksAPI';

const SearchPage = (books) => {
  
  
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/main-page">
            <button className="close-search" >
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
             
              
            />
            </div>
          </div>
        <div className="search-books-results">
            <ol className="books-grid">
            </ol>
          </div>
        </div>
    );
};

export default SearchPage;