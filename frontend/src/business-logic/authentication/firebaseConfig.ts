import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_fire_appkey ,
  authDomain: "wroff-languageapp.firebaseapp.com",
  projectId: "wroff-languageapp",
  storageBucket: "wroff-languageapp.appspot.com",
  messagingSenderId: "571711243071",
  appId: process.env.REACT_APP_fire_appid,
  measurementId: "G-8GQMGRGH40",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();

export {auth, googleProvider, faceBookProvider};
