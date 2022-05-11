import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDtJs2Bdl2Zfh7-hWVnaIQsXagzzF9Pe-0",
    authDomain: "twitter-clone-ude.firebaseapp.com",
    projectId: "twitter-clone-ude",
    storageBucket: "twitter-clone-ude.appspot.com",
    messagingSenderId: "314873886763",
    appId: "1:314873886763:web:21efdb159aeafeb1c7526e"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;
