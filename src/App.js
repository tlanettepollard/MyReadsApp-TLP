import "./App.css";
import React from "react";
import Header from './components/Header';
import MainPage from './components/MainPage';
import SearchBooksPage from './components/SearchBooksPage';


function App() {


  return (
    <div className="app">
      
      <div className="list-books">
        <Header />
        <MainPage />  
      </div> 
      <SearchBooksPage />
    </div>
  );
};

export default App;