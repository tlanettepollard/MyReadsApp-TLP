import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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

  const changeBookShelf = (book, shelf) => {
    BooksAPI.update({ id: book.id }, shelf)
      .then(() => {
        book.shelf = shelf
        setBooks({
          books: books.filter(b => b.id !== book.id).concat(book)
        })
    })
  }
  
  

  return (
    <div className="app">
      <Routes>
        {/* MainPage */}
        <Route path="/main-page" element={
          <div className="list-books">
            <Header />
            <MainPage
              books={books}
              onChangeShelf={changeBookShelf}
            />
          </div>
        }> 
        </Route>

        {/* SearchPage */}
        <Route path="/search-page" element={
          <SearchPage  
          onChangeShelf={changeBookShelf}  
          />
        }>  
        </Route>
      </Routes>
    </div>
  );
};

export default App;
