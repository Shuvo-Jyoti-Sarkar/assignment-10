// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy-XVVbgvqX5YtOD0fT1deaALGNO9c49M",
    authDomain: "trip-to-dreamland.firebaseapp.com",
    projectId: "trip-to-dreamland",
    storageBucket: "trip-to-dreamland.appspot.com",
    messagingSenderId: "563474421568",
    appId: "1:563474421568:web:f34a0afe74f79e31c24ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;