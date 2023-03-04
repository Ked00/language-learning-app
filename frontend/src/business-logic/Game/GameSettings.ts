import React, {useState} from "react";

type settings = {time: number; sentence: number; subject: string; language: string}

type Output = {
  info: settings;
  setInfo: (info:settings) => void;
};

export function useGameInfo(): Output {
  const [info, setInfo] = useState<settings>({time: 0, sentence: 0, subject: "", language: ""});

  const changeInfo = (info:settings)=>{
    setInfo(info)
  }

  return {
    info: info,
    setInfo: changeInfo,
  };
}
