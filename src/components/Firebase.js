import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA8oDC6ZT-o_qgUdNRdOfZnA8F_EnVLBeo",
    authDomain: "proyecto-coderhousereactjs.firebaseapp.com",
    projectId: "proyecto-coderhousereactjs",
    storageBucket: "proyecto-coderhousereactjs.appspot.com",
    messagingSenderId: "270352566489",
    appId: "1:270352566489:web:7c6c1ab1714e5a3be616c8",
    measurementId: "G-8FPJCJ8PR4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 