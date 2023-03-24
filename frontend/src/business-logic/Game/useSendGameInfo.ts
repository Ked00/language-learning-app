import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type outPut = {
  postThenRedirect: (param: {[key: string]: string}) => void;
};

export function useSendGameInfo(): outPut {
  const navigate = useNavigate();

  function postThenRedirect(param: {[key: string]: string}) {
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
    postThenRedirect: postThenRedirect,
  };
}
