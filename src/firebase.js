// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd5nNw9PlCjfUF4RLDW6d5oMSrJ7YEaTA",
  authDomain: "pokedex-8a7f4.firebaseapp.com",
  projectId: "pokedex-8a7f4",
  storageBucket: "pokedex-8a7f4.appspot.com",
  messagingSenderId: "707829288409",
  appId: "1:707829288409:web:f143d6cdcf44d0b1109dc8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


/* 

import {signInWithEmailAndPassword , createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase"


export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
}

*/