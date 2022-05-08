import React, {useState} from 'react';
import Book from './Book';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';


const SearchBooksPage = (book, updateBookShelf) => {
 

  

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
            
              <li>
                <Book
                  key={book.id}
                  book={book}
                  changeBookShelf={updateBookShelf}/>
              </li>
            
          </ol>
        </div>
      </div>
  );
};


export default SearchBooksPage;