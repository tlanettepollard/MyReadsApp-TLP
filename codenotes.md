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

This was a tough app. Once I had an idea of how to organize the components and where the state would live, then I started coding. It took me awhile to get the shelf changer to work. I kept getting errors about "changeBookShelf" not being a function. I decided to redo that part and really focused on how I was sending the state from the App to the other child components. I finally got it.

### Helpful Resources

- [Maeva NGUYEN](https://www.youtube.com/watch?v=i6L2jLHV9j8)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Kenodipe](https://www.youtube.com/watch?v=DNdZ3-MiF1E&t=590s&ab_channel=kenjournal)

---

{/_ Referring to tutorial: https://www.youtube.com/watch?v=DNdZ3-MiF1E_/}
