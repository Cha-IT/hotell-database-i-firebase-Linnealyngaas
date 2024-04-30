// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3u6GhO_AycHZxrn9jrXxJrWJ_o0MKgR0",
  authDomain: "hotell-f8a1b.firebaseapp.com",
  projectId: "hotell-f8a1b",
  storageBucket: "hotell-f8a1b.appspot.com",
  messagingSenderId: "704193024895",
  appId: "1:704193024895:web:621388db6922e2f2f9804a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
