import React, {useState} from "react";

type Output = {
  points: number;
  decrease: () => void;
  increase: () => void;
  wrongFunc: () => void;
  correct: number;
  wrong: number;
};

export function usePoints(): Output {
  const [points, setPoints] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [correct, setCorrect] = useState(0);

  function decrease() {
    if (points > 0) {
      setPoints((prev) => prev - 10);
    }
  }

  function wrongFunc() {
    setWrong((prev) => prev + 1);
  }

  function increase() {
    setCorrect((prev) => prev + 1);
    setPoints((prev) => prev + 10);
  }

  return {
    points: points,
    correct: correct,
    wrong: wrong,
    decrease: decrease,
    increase: increase,
    wrongFunc: wrongFunc,
  };
}
