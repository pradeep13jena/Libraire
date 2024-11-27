# Libraria - Epic reads for every type of reader.

Welcome to **Libraire**, the ultimate destination for book lovers! Whether you're a casual reader or an avid **bibliophile**, we offer a curated collection of books that cater to all tastes, genres, and reading preferences. Our mission is to bring epic stories and fresh perspectives to every type of reader.

## Table of Contents
- [Getting started](#getting-started)
- [Design overview](#design-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Future Improvments](#future-improvements)
- [Links](#links)
- [Credits](#credits)
- [Contact](#contact)


## Getting Started

To use this project, clone it from GitHub and follow these steps:

1. **Install Dependencies**: Run the following command to install all required dependencies, including React, React-DOM, React-Router-DOM, Redux Toolkit and Vite:
   ```bash
   npm install
   ```

2. **Start the Development Server**: Use Vite to create a local server for development:
   ```bash
   npx vite
   ```

## Design Overview

The design of Efficiently is minimalistic, focusing on simplicity and ease of use. The interface is clean and straightforward to help users quickly add, manage, and organize their tasks without distraction. This website is responsive for almost all devices key divide point is 770px and 450px.

- **Header**: It consists of Header which has the logo of the website, and links to different pages such as *Browse Page*, *Add Books Page* and *Wishlist*.
- **Footer**: In the footer section, There's the copyright message and my email address.
- **Main**: In the main page, it consists of two section, first section in which you can search books through Genre. If you click on the genre you will be headed to page, */genre/Historical*. These pages will show you books according to the Genre clicked/searched. and in the second section you can search books through popularity. Books which has rating above `4.6`.
-**Browse**: All the books in the database gets listed here Scroll down and choose your book or you can enter Author or Title of the book or you can search books through genres.
-**Wishlist**: Whichever book you like or heart will get saved over here. Keep them as a reminder to read them later.

## Features

- **Browse & Discover**: Explore a wide range of books across genres from fiction to non-fiction, fantasy, mystery, and beyond.
- **Save & Organize**: Create your own reading lists by hearting the books and save books for later.
- **User-friendly Interface**: Enjoy a clean and intuitive design that makes browsing and reading easier than ever.

## Technologies Used

- HTMl, CSS, JS
- React, React-DOM, React-Router-Dom
- Redux
- Vite

## Project Structure

/Libraire
│
├── /src
│   ├── /assets
│   │    ├── /styles        # CSS Files
│   │
│   ├── /components         # Components files
│   │
│   ├── /utils
│        ├── /Data           # Static book data
│        └── /Features       # Redux toolkit
│   
│
└──── /index.html         # Main HTML entry point


## Future Improvements

- **Personalized Recommendations**: Get book suggestions tailored to your tastes based on previous reads and ratings.
- **Book Reviews**: Read honest reviews and ratings from fellow readers to find your next favorite book.
- **Add Password Barrier**: Not everyone will be able to add Books to the Database. This will protect data to get polluted.

## Links

- **GitHub Repository**: [Libraire](https://github.com/pradeep13jena/Libraire)
- **Live Website**: [Libraire - Epic reads for every type of reader.](https://libraire.netlify.app/)

## Credits

- [React documents](https://react.dev/learn)
- [React Router DOM documents](https://reactrouter.com/en/main/start/tutorial)
- [Redux documents](https://redux-toolkit.js.org/introduction/getting-started)
- [W3 school](https://www.w3schools.com/)

## Contact

- **[Portfolio Project]**(https://pradeepjena.netlify.app/)
- **[E-MAIL]**(goldrushatjenas@gmail.com)
- **[LinkedIn]**(https://www.linkedin.com/in/pradeepjena/)