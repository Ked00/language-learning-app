import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function useSignIn(email: string | null) {
  const navigate = useNavigate();

  axios
    .post("auth/login", {
      email: email,
    })
    .then((res) => {
      if (res.data) {
        navigate("/dashboard")
      }
      else{
        navigate("/successful")
      }
    });
}
