import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBMKXCDzAu8WEdEtdbzQGEsehY_UzrMtfo",
  authDomain: "journal-5a1a2.firebaseapp.com",
  projectId: "journal-5a1a2",
  storageBucket: "journal-5a1a2.firebasestorage.app",
  messagingSenderId: "462497084608",
  appId: "1:462497084608:web:8f95509eb6fcd7b19be925",
  measurementId: "G-EMC66JT806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
