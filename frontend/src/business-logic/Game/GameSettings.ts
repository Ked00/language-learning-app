import React, {useState} from "react";
import axios from "axios";

type settings = {
  time: number;
  sentence: number;
  subject: string;
  language: string;
  questions: {main: [{question: string}]; translated: [{question: string}]};
};

type Output = {
  info: settings;
  gameInfo: () => void;
};

export function useGameInfo(): Output {
  const [info, setInfo] = useState<settings>({
    time: 0,
    sentence: 0,
    subject: "",
    language: "",
    questions: {main: [{question: ""}], translated: [{question: ""}]},
  });

  function gameInfoCall() {
    axios
      .get("quiz/getGameInfo")
      .then((res) =>
        setInfo({
          time: res.data.details.GameType,
          sentence: res.data.details.Sentences,
          subject: res.data.details.Subject,
          language: res.data.details.Language,
          questions: res.data.questions,
        })
      )
      .catch((err) => console.log(err));
  }

  return {
    info: info,
    gameInfo: gameInfoCall,
  };
}
