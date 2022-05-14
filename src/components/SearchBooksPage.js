import React, { useState } from 'react';
import Book from './Book';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

const SearchBooksPage = ({ books, newBookShelf }) => {
  const [query, setQuery] = useState('');
  const [matchedBooks, setMatchedBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    searchedBooks(query);
  };

  const searchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        searchedBooks.error ? setMatchedBooks([]) : setMatchedBooks(searchedBooks)
      });
    } else {
      setMatchedBooks([]);
    }
  };
  
  return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" >
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query && matchedBooks.map((matchedBooks) => {
              let shelf = 'none';
              books.map((book) => book.id === matchedBooks.id ? (shelf = book.shelf) : '');
              return (
                <li key={matchedBooks.id}>
                  <Book
                    book={matchedBooks}
                    shelf={shelf}
                    newBookShelf={newBookShelf}
                  />
                </li>  
              );
            })}
          </ol>
        </div>
      </div>
  );
};


export default SearchBooksPage;
