import React, {useState} from "react";
import axios from "axios";

type settings = {
  time: number;
  sentence: number;
  subject: string;
  language: string;
  option: string;
  questions: {main: [{question: string, image:string}]; translated: [{question: string}]};
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
    option: "",
    questions: {main: [{question: "", image: ""}], translated: [{question: ""}]},
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
          option: res.data.details.languageOption,
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