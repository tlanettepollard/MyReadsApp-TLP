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


  


  return (
    <div className="app">
      <Routes>
        <Route path="/search-page" element={
          <SearchPage />
        }>  
        </Route>

        {/* MainPage */}
        <Route path="/main-page" element={
          <div className="list-books">
            <Header />
            <MainPage
              books={books}
            />
          </div>
        }>
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;
