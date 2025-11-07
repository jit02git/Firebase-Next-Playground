// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6O383IvIadN7uLUE1o6c9WXPHm1mPLNo",
  authDomain: "fir-playground-2f3b7.firebaseapp.com",
  projectId: "fir-playground-2f3b7",
  storageBucket: "fir-playground-2f3b7.firebasestorage.app",
  messagingSenderId: "254462113909",
  appId: "1:254462113909:web:ccd39c86760b93e35c203c",
  measurementId: "G-EMRK26TEV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);