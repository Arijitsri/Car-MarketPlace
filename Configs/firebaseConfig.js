// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-e12b9.firebaseapp.com",
  projectId: "car-marketplace-e12b9",
  storageBucket: "car-marketplace-e12b9.appspot.com",
  messagingSenderId: "255107654799",
  appId: "1:255107654799:web:029ef937f6800b18dbbcfa",
  measurementId: "G-NELSNRCYHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);