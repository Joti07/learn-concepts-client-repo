// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfinld3qICjfA3lTgezhoHwskPcFVrmwk",
    authDomain: "learn-concepts-6e4b9.firebaseapp.com",
    projectId: "learn-concepts-6e4b9",
    storageBucket: "learn-concepts-6e4b9.appspot.com",
    messagingSenderId: "294259787771",
    appId: "1:294259787771:web:8957b2f220566d84cced5e",
    measurementId: "G-ZZH8Z5S22D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;