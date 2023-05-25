// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAqoU1-wKwPCwTBm1d9_72Lpff62A0bYI",
  authDomain: "todo-cd22d.firebaseapp.com",
  projectId: "todo-cd22d",
  storageBucket: "todo-cd22d.appspot.com",
  messagingSenderId: "136653480235",
  appId: "1:136653480235:web:4e2af4753a2a228a25656e",
  measurementId: "G-RBHRPM95NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;