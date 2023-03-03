import React, {useState} from "react";
import {auth, faceBookProvider} from "./firebaseConfig";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {outPut} from "../../types/authOutput";

export function FaceBookAuth(): outPut {
  const [value, setValue] = useState<string | null>("");
  const navigate =  useNavigate()

  const handleClick = () => {
    signInWithPopup(auth, faceBookProvider).then((res) => {
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
    getAuthenticated: handleClick,
  };
}
