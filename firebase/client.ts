//Donee
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDzJAEacrnV6QTdk3hMVlnmVXytKye-BPI",
  authDomain: "minpro-f8eb5.firebaseapp.com",
  projectId: "minpro-f8eb5",
  storageBucket: "minpro-f8eb5.firebasestorage.app",
  messagingSenderId: "793039633017",
  appId: "1:793039633017:web:d444d767c477198d5932a8",
  measurementId: "G-LER6THBSHN"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)