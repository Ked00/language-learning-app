import React from "react";
import axios from "axios";

type Output = {
  sendPost: (seconds: number, sentences: number, correct: number, points: number) => void;
};

export function useEndGameStats(seconds: number, sentences: number, correct: number, points: number): Output {
  function sendPost() {
    console.log("data sent");
    axios
      .post("quiz/setGameInfo", {
        seconds: seconds,
        // minutes: minutes,
        correct: correct,
        wrong: sentences - correct,
        points: points,
      })
      .then((res) => (res.status == 200 ? console.log("data sent") : console.log("error")))
      .catch((err) => console.log(err));
  }

  return {
    sendPost: sendPost,
  };
}
