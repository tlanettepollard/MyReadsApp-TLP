import React, { useState, useEffect } from 'react';

import "./App.css";
import Header from './components/Header';
//import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage';
import * as BooksAPI from './BooksAPI';

const App = () => {


  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async (books) => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      //console.log(res);
    };
    getBooks();
  }, []);


  
  return (
    <div className="app">
      <div className="list-books">
        <Header />
        <MainPage books={books}/>
      
      </div>
    </div>
  );
};

export default App;
