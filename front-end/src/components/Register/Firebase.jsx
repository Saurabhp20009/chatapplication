// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcdSW-zYcIhkmh4tGC7zxDIqqP1gf5zqs",
  authDomain: "chatt-application-6a654.firebaseapp.com",
  projectId: "chatt-application-6a654",
  storageBucket: "chatt-application-6a654.firebasestorage.app",
  messagingSenderId: "687786599121",
  appId: "1:687786599121:web:38eb763103fea2cc68dbf0",
  measurementId: "G-KS78V7C3N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);