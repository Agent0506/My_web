// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhgr3cKNTWJetHTPWjRW1SP0lb4CUfQYo",
    authDomain: "portfolio-894f4.firebaseapp.com",
    projectId: "portfolio-894f4",
    storageBucket: "portfolio-894f4.firebasestorage.app",
    messagingSenderId: "515085039987",
    appId: "1:515085039987:web:6b911c566d17da1c22ad06",
    measurementId: "G-SQPPHTPG5M"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);