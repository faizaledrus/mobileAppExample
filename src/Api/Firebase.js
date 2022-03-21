// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRvGdAbBZshqC7PcZBl6l9rGQaApzcyD4",
  authDomain: "authentication-test-82ee9.firebaseapp.com",
  projectId: "authentication-test-82ee9",
  storageBucket: "authentication-test-82ee9.appspot.com",
  messagingSenderId: "848694081657",
  appId: "1:848694081657:web:79d2fc85f541354a297ca8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
