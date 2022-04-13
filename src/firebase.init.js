// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJIMwDrEP5yoJb5ofND1yo5XB1JGn9Mns",
  authDomain: "genius-car-services-a44c9.firebaseapp.com",
  projectId: "genius-car-services-a44c9",
  storageBucket: "genius-car-services-a44c9.appspot.com",
  messagingSenderId: "670634043836",
  appId: "1:670634043836:web:97b238da263a998b1523b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth ;