# Movie search React native App:

# Requirement
Develop a movie search application in React Native

use public APIs

https://api.themoviedb.org/3/search/movie for data 

The application should work on both iOS and Android (just the latest OS is fine for both)

The app should have the following features


1. Autocomplete search

2. Show search results in a dropdown with the movie name, image, and title.



#Solution
For developing the appliation i have majorly used the following library for app architecture

    "@reduxjs/toolkit": "^1.9.3",

I am using Redux for state management and using the latest redux toolkit library
For each feature i am creating a slice using createSlice which is redux toolkit function

# Api folder
this folder contains the movies.js which is used to fire https request and fetch the data and set that data in to redux store with the help of reducers

# Configurations folder
App starts with the App.tsx and then Root.js
store.js is used for redux store configuration
all the above files are resides in to folder named configurations

# Env folder
movies.json contains the env variable
 "API_URL": "https://api.themoviedb.org/3/search/movie,
 
 # Screens folder
 This folder contains the two main component of the application 
 1. MovieScreenSearchComponent
 2. MovieDetailsComponent
 3. MovieAutoCompleteResultComponent
 
 rest of the component added in this folder to split the ui logic in to smaller components and followed the SRP design principles
 
 #slices
 
 This folder contains the slices for the feature that we are listing in the app also it creates a reducer which is register to the store for state management in the redux
 
# Install and run the app command

run npm i in root folder
run bundle exec pod install inside ios folder
install app using xcode or from react-native start ios
 
# Highlevel diagram of implementation

<img width="363" alt="Screenshot 2023-03-27 at 5 08 03 PM" src="https://user-images.githubusercontent.com/9390068/227930985-f7499188-9d92-4e74-bd48-b2525cbb27c9.png">





