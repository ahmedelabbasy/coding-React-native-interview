# coding-React-native-interview

Task Overview:
This project is a React Native application that fetches and displays popular movies from an API. It allows users to like and save movies, view details for each movie, and navigate between different screens. The app also includes a splash screen with an animated logo and a search functionality to filter movies.

# Installation:

## Prerequisites
Make sure you have the following installed:

- Node.js (v14 or higher)
- React Native CLI
- Yarn or npm

## Step-by-Step Guide
1. Clone the repository:

`git clone <repo-url>
cd <repo-folder>`

2. Install dependencies:
You can use either npm or yarn to install the required dependencies.

Using Yarn:

`yarn install`

Using npm:

`npm install`

3. Link Native Dependencies:
Some dependencies may require linking. If you're using React Native CLI (without Expo), you can link them with:

`npx react-native link`

4. Start the App:

To start the app, run the following commands:

For iOS (requires Xcode):

`npx react-native run-ios`

For Android (requires Android Studio):

`npx react-native run-android`


### Project Structure:

src/

├── assets                   # Images and other static assets

├── components               # Reusable components

│   ├── AppError             # Error handling component

│   ├── AppLoading           # Loading state component

│   ├── MovieDetailsPopup    # Popup component for movie details

│   ├── MovieItem            # Movie item component displayed in lists

├── constants                # Constants like API keys, URLs, etc.

├── helpers                  # Helper functions

├── hooks                    # Custom React hooks

├── navigation               # Navigation setup (e.g., DrawerNavigator, stack navigation)

├── screens                  # Screen components

│   ├── FavoritesScreen      # Screen displaying the user's favorite movies

│   ├── HomeScreen           # Main screen showing popular movies

│   ├── SplashScreen         # Splash screen with logo animation

├── services                 # API calls and other external services

├── store                    # Redux store, slices, and sagas

│   ├── sagas                # Redux-saga for managing side effects

│   ├── slices               # Redux slices for managing state

├── styles                   # Global styles

├── theme                    # Theme-related files for light/dark modes

├── types                    # TypeScript types and interfaces

├── App.tsx                   # Main app file that sets up navigation and state management

├── package.json              # Project dependencies and scripts


### Key Features:

- Splash Screen: Animated logo that bounces up and down until navigating to the main screen.
- Home Screen: Displays a list of popular movies fetched from the TMDb API with a like/unlike feature.
- Favorites Screen: Allows the user to view and manage their favorite movies.
- Search Functionality: Search movies based on the title.
- Movie Details Popup: Shows detailed information about a selected movie.
- Light/Dark Theme Support: Switch between themes with a button in the header.

### Custom Hooks:

## useMovies
- Handles fetching of movie data (popular movies, favorites).
- Handles liking/unliking of movies.
- Can be used on both the HomeScreen and FavoritesScreen to avoid code duplication.

### Store Management:

## Redux Store:
- Slices: Uses Redux Toolkit slices (movieSlice) for managing movie data, liked movies, and loading states.
- Sagas: Handles side-effects like fetching movie data from the TMDb API.

# Development Tips

- Use yarn lint or npm run lint to lint your code.
- Run yarn test or npm test to run the unit tests.
- To enable debugging, use React Developer Tools.
