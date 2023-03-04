import React, {useState} from "react";
import axios from "axios"


type settings = {time: number; sentence: number; subject: string; language: string}

type Output = {
  info: settings;
  gameInfo: () => void;
};

export function useGameInfo(): Output {
  const [info, setInfo] = useState<settings>({time: 0, sentence: 0, subject: "", language: ""});

  function gameInfoCall(){
    axios
         .get("quiz/getGameInfo")
         .then((res) =>
          setInfo({
             time: res.data.GameType,
             sentence: res.data.Sentences,
             subject: res.data.Subject,
             language: res.data.Language,
           })
         )
         .catch((err) => console.log(err));
   }

  return {
    info: info,
    gameInfo: gameInfoCall
  };
}
