import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
//import Book from './components/Book';
import MainPage from './components/MainPage';
import SearchBooksPage from './components/SearchBooksPage';
import * as BooksAPI from './BooksAPI';


const App = () => {

  const [books, setBooks] = useState([]);

  /* Used useEffect hook to get books from BooksAPI */
  
  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
       console.log(data);
        
      }
      );
  }, [])

  /* updateBookShelf method to move books between shelves */

  const newBookShelf = (book, newShelf) => {

    const updatedBooks = books.map(b=> {
      if (b.id === book.id) {
        book.shelf = newShelf;
        return book;
      }
      return b;
    })
    setBooks(updatedBooks);
    BooksAPI.update(book, newShelf);
  }

  return (
    <div className="app">
      <Routes>
        {/* Main Page */}
        <Route path='/' element={
            <div className="list-books">
            <Header />
            <MainPage
            books={books}
            newBookShelf={newBookShelf}
            /> 
          </div>
        }>
          
        </Route>
        
        {/* SearchPage */}

        <Route path='/searchpage' element={
          <SearchBooksPage
          books={books}
          newBookShelf={newBookShelf}
          /> 
        }
        >
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;