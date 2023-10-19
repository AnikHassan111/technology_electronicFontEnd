// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ-2qMrabEJ30OgkaWJ_rnDUrwz7jf73M",
  authDomain: "assigement-10.firebaseapp.com",
  projectId: "assigement-10",
  storageBucket: "assigement-10.appspot.com",
  messagingSenderId: "339428743541",
  appId: "1:339428743541:web:02a9ee15a8817a3097db3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth