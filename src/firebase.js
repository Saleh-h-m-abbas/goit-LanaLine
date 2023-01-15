import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "goit-projectone.firebaseapp.com",
  projectId: "goit-projectone",
  storageBucket: "goit-projectone.appspot.com",
  messagingSenderId: "215051760260",
  appId: "1:215051760260:web:7b5db5670607f73a0a88d1",
  measurementId: "G-00LMDB9YXX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
