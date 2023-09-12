import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA88xnkZUqbzlXwZdmLG4-N9TKC5ydvUJY",
  authDomain: "chat-f473d.firebaseapp.com",
  projectId: "chat-f473d",
  storageBucket: "chat-f473d.appspot.com",
  messagingSenderId: "460381316598",
  appId: "1:460381316598:web:39d7243cfcaa72166893d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
