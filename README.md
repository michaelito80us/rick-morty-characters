# Rick and Morty Character Browser

![Rick & Morty](https://res.cloudinary.com/dckqfwvh1/image/upload/v1697735262/rick-morty-characters_lzzakp.webp)

Explore characters from the "Rick and Morty" series through this sleek, user-friendly application. This project taps into the [Rick and Morty API](https://rickandmortyapi.com/documentation) and presents a seamless browsing experience, complete with an intuitive search feature.

## Features

- **Infinite Scrolling**: Browse without limits; the application loads new characters as you scroll.
- **Live Search**: Find characters instantly as you type in the search bar.
- **Error Handling**: Gracefully handles errors with user-friendly notifications.
- **Responsive Design**: Enjoy a clean, fully responsive interface on both mobile and desktop, crafted with TailwindCSS.

## Tech Stack

- **React**: Powers the user interface.
- **Vite**: A build tool that guarantees a faster, more efficient build process compared to Create React App.
- **React Router**: Handles application routing.
- **React Query**: Manages asynchronous queries with ease.
- **TailwindCSS**: Provides utility-first CSS classes that ensure a stylish design.

## Getting Started

Get up and running with your own instance of the project. Follow these simple steps:

### Prerequisites

- Ensure you have Node.js and npm installed - this project requires them to run.
- While this project uses Vite, understanding of basic React principles is helpful.

### Setting Up

1. Clone the repository to your local workstation:

   ```shell
   git clone https://github.com/michaelito80us/rick-morty-characters.git
   ```

2. Change your directory to the project's root:
   ```shell
   cd rick-and-morty-character-browser
   ```
3. Install all dependencies:
   ```shell
   npm install
   ```
4. Fire up the development server:
   ```shell
   npm run dev
   ```

Open your browser and visit [http://localhost:5173](http://localhost:5173). Voilà! Explore the multiverse of "Rick and Morty" characters!

## Project Structure

- `App.jsx`: The heart of the application, orchestrating all components.
- `Home.jsx`: Renders character listings and manages infinite scrolling.
- `CharacterCard.jsx`: Displays details for each character.
- `HeroBanner.jsx`: Houses the search functionality.
- `ErrorBoundary.jsx`: Catches and handles application errors.
- `fetchCharacters.js`: Responsible for asynchronous requests to the API.
- `ScrollToTop.jsx`: A convenient button for returning to the top of the page.

## Live Demo

Experience the application: [Live Demo](https://rick-morty-characters-6f9zns13l-michaelito80us.vercel.app/)

## Licensing

This project is MIT licensed.
