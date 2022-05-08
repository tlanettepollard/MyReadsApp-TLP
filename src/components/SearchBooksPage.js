import React, {useState, useEffect} from 'react';
import Book from './Book';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';


const SearchBooksPage = (book, updateBookShelf) => {


  const [query, setQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfBookIds, setMapOfBookIds] = useState(new Map());


  useEffect(() => {
    let isActive = true;
    if (query) {
      BooksAPI.search(query).then(data => {
        if (data.error) {
          setSearchedBooks([])
        } else {
          if (isActive) {
            setSearchedBooks(data)
            setMapOfBookIds(createMapOfBooks(data))
          }
        }
      })       
    } 
    // Clean up data for searched books
    return () => {
      isActive = false;
      setSearchedBooks([])
    }

  }, [query]);

  useEffect(() => {
    const combinedBooks = searchedBooks.map(book => {
      if (mapOfBookIds.has(book.id)) {
        return mapOfBookIds.get(book.id);
      } else {
        return book;
      }
    })
    setMergedBooks(combinedBooks)
  }, [mapOfBookIds, searchedBooks])

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }



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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {mergedBooks.map((book) => (
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


export default SearchBooksPage;