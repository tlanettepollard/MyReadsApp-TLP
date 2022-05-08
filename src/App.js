import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBooksPage from './components/SearchBooksPage';
import MainPage from './components/MainPage';
import "./App.css";
import * as BooksAPI from './BooksAPI';

const App = () => {

  const [books, setBooks] = useState([]);
 
   useEffect(() => {
     BooksAPI.getAll()
       .then(data => {
         setBooks(data)
       }
       );
   }, []);
  

  const updateBookShelf = (book, shelf) => {
    let mapOfBookIds;
    const updatedBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    })
    if (!mapOfBookIds.has(book.id)) {
      book.shelf = shelf;
      updatedBooks.push(book);
    }
    setBooks(updatedBooks);
    BooksAPI.update(book, shelf);
 }

 
  return (
    <div className="app">
      
        <Routes>
          {/* MainPage */}
          <Route exact path="/main-page" element={
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
          <Route path="/search-page" element={
            <SearchBooksPage 
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