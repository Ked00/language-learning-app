import React from "react";
import axios from "axios";

type Output = {
  sendPost: (seconds: number, sentences: number, correct: number, points: number) => void;
};

export function useEndGameStats(): Output {
  function sendPost(seconds: number, sentences: number, correct: number, points: number) {
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
