// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRYts8W9lHyPQrQ-D8rNW_UWaAh0F_Si0",
  authDomain: "twitter-clone-f9643.firebaseapp.com",
  projectId: "twitter-clone-f9643",
  storageBucket: "twitter-clone-f9643.appspot.com",
  messagingSenderId: "563917432572",
  appId: "1:563917432572:web:9806f1a243a8067548d979",
  measurementId: "G-6QBDE8HN5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;