import React, {useState} from "react";
import {auth, googleProvider} from "./firebaseConfig";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {useNavigate} from "react-router-dom";

import {outPut} from "../../types/authOutput";
import {useSignIn} from "../api-calls/SignIn";
import axios from "axios";

export function GoogleAuth(): outPut {
  const [value, setValue] = useState<string | null>("");
  const navigate = useNavigate();

  const handleClick = async () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      axios
        .post("auth/login", {
          email: res.user.email,
          photo: res.user.photoURL,
        })
        .then((res) => {
          if (res.data) {
            navigate("/dashboard");
          } else {
            navigate("/successful");
          }
        });
    });
  };

  return {
    value: value,
    getAuthenticated: handleClick,
  };
}
