// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-project-7389f.firebaseapp.com",
  projectId: "real-state-project-7389f",
  storageBucket: "real-state-project-7389f.appspot.com",
  messagingSenderId: "705045747159",
  appId: "1:705045747159:web:e434b84ebe7cebc1efa792"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



