import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBts12EZLy7SPskaK4-CVaBQXEzqDhSIM",
  authDomain: "wroff-languageapp.firebaseapp.com",
  projectId: "wroff-languageapp",
  storageBucket: "wroff-languageapp.appspot.com",
  messagingSenderId: "571711243071",
  appId: "1:571711243071:web:7075380964d80e1a13898a",
  measurementId: "G-8GQMGRGH40",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();

export {auth, googleProvider, faceBookProvider};
