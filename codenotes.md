# My Project Notes

### Organizing My App

First I needed to split the app into a component hierarchy. I needed to determine my components and subcomponents. I’m referred to [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) as a guide. After reviewing the App.js file, organized my components: MainPage, SearchPage, Book, and Header.
Then I built a static version of my app with the UI. I referred to Maeve Nguyen's tutorial on how to organize the project. I had to convert from class components to functional components.

### MYREADS App

- App.js: includes MainPage and SearchPage
- Book: includes bookshelf changer
- MainPage: includes book and add book/open search button
- SearchBooks: page includes search input bar, search results, and close button; includes book

My App Hierarchy:

```
App.js
|-- Header
|-- MainPage.js
    |-- BookShelf.js
        |-- Book.js
|-- SearchPage.js
    |-- Book.js
```

### Working on My App

This was a tough app. Once I had an idea of how to organize the components and where the state would live, then I started coding. It took me awhile to get the shelf changer to work. I kept getting errors about "changeBookShelf" not being a function. I decided to redo that part and really focused on how I was sending the state from the App to the other child components. I finally got it. (05/09/2022: I thought I got it.)

### Why I Decided to Start Over

I decided to start over because I was getting confused with how I was passing my data between my components. I used Nguyen's approach of going back to the rubric and reviewing the project README notes about the BooksAPI. I found this to be helpful. 

#### Starting Over Notes

(05/09/2022) I've tried to figure out one error for the last two days. I realized that after staring at my code, I needed to start again to better understand what was going on. I'm going to follow the same steps I did before to start my app. So, I erased everything and started again. I've done this with other projects and it has been successful.

(05/10/2022) Today I was able to the Routing section of the Rubric. Unfortunately, I kept receiving the error: 'no routes matched location'. I put it away and try again tomorrow.

(05/11/2022) I'm going to try again with my router. I finally got it to work again. Minor errors: I forgot the 'to=' in the Link statement. Now I need to work on the Search function.

(05/13/2022) I finally got it! I was able to get my search function to work! Yes! 

(05/14/2022) I finally completed my app. I still can't get the book to appear on the bookshelves unless I refresh the home page after I added the book on the search page. I know it's something I've seen in the lessons. 



