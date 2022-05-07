import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage';
import "./App.css";
import * as BooksAPI from './BooksAPI';

const App = () => {

  const [books, setBooks] = useState([]);
 

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res); 
    };
    getBooks();
  }, []);

  const updateBookShelf = (book, newShelf) => {
    const updatedBooks = books.map(b => {
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
          {/* MainPage */}
          <Route path="/" element={
            <div className="list-books">
              <Header />
              <MainPage
                books={books}
                updateBookShelf={updateBookShelf}
              />
            </div>
          }> 
          </Route>

          {/* SearchPage */}
          <Route path="search-page" element={
            <SearchPage 
              books={books} 
              updateBookShelf={updateBookShelf}
            />
          }>  
          </Route>
        </Routes>
      
    </div>
  );
};

export default App;
