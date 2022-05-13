import React, { useState } from 'react';
import Book from './Book';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

const SearchBooksPage = (book, books, newBookShelf) => {
  const [query, setQuery] = useState('');
  const [resultBook, setResultBook] = useState([]);

  const updateQuery = (query) => {
    setQuery({
      query: query
    })
    updateResults(query);
  }

  const updateResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((resultBook) => {
        // error handling for search
        resultBook.error ? setResultBook({resultBook: []}) : setResultBook({ resultBook: resultBook})
      }) 
    } else {
      setResultBook({ resultBook: [] });
    }
  }

  
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
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {resultBook.map(book => {
            let shelfName = 'none';
            
            books.map(book => (
              book.id === resultBook.id ?
                shelfName = book.shelf : ''
            ));

            return (
              <li key={resultBook.id}>
                <Book
                  book={resultBook}
                  newBookShelf={newBookShelf}
                  currentShelf={shelfName}
                />
              </li>
            );
          }
          )}   
          </ol>
        </div>
      </div>
  );
};


export default SearchBooksPage;
