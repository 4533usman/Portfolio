// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD95Qz90Zy97Fh72fcv864efIRCPLYQBZw",
    authDomain: "portfolio-4533.firebaseapp.com",
    projectId: "portfolio-4533",
    storageBucket: "portfolio-4533.appspot.com",
    messagingSenderId: "532171975084",
    appId: "1:532171975084:web:c2ee810bc7d922c5443209",
    measurementId: "G-SLBJX2GY95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);