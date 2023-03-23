import React, {useState} from "react";
import {auth, faceBookProvider, googleProvider} from "./firebaseConfig";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import {authOutPut, authState} from "../types/authOutput";

export function useLogin(): authOutPut {
  const [value, setValue] = useState<authState>("");
  const navigate = useNavigate();
  
  const getAuthenticated = (provider: string) => {
    const authProvider = provider == "facebook" ? faceBookProvider : googleProvider;

    signInWithPopup(auth, authProvider).then((res) => {
      axios
        .post("auth/login", {
          email: res.user.email,
          photo: res.user.photoURL,
        })
        .then((res) => {
          if (res.data) {
            navigate("/history");
          } else {
            navigate("/successful");
          }
        });
    });
  };

  return {
    value: value,
    getAuthenticated: getAuthenticated,
  };
}
