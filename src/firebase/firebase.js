import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmlTNThrKTdrB0RTx75u-omoOlzD8F4lw",
    authDomain: "fmll-b61d1.firebaseapp.com",
    projectId: "fmll-b61d1",
    storageBucket: "fmll-b61d1.appspot.com",
    messagingSenderId: "750638414631",
    appId: "1:750638414631:web:82c713afd3221da8370702"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
