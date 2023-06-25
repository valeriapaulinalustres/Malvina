// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_vk1vf2gUJ85pqorwEVJIxtZVOh6BU7Y",
  authDomain: "malvina-89430.firebaseapp.com",
  projectId: "malvina-89430",
  storageBucket: "malvina-89430.appspot.com",
  messagingSenderId: "116755144024",
  appId: "1:116755144024:web:5b53d7cc0f0790c46cd92d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
