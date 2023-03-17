import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function useRedirectToGame() {
  const navigate = useNavigate();

  function redirect(param: {[key: string]: string}) {
    axios
      .post("quiz/setGameInfo", {
        language: param.language,
        subject: param.subject,
        gameType: param.gameType,
        sentences: param.sentences,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/game");
        }
      })
      .catch((err) => console.log(err));
  }

  return {
    redirect: redirect,
  };
}
