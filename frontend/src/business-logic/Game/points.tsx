import React, {useState} from "react";

type Output = {
  points: number;
  decreasePoints: () => void;
  correct: number;
  wrong: number
};

export function usePoints(number_of_questions: number): Output {
  const [points, setPoints] = useState(number_of_questions * 10);
  const correct = points / 10
  const wrong = number_of_questions - correct

  function decreasePoints() {
    setPoints((prev) => prev - 10);
  }

  return {
    points: points,
    correct: correct,
    wrong: wrong,
    decreasePoints: decreasePoints,
  };
}
