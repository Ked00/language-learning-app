import React, {useState} from "react";

type Output = {
  points: number;
  decreasePoints: () => void;
  correct: number;
};

export function usePoints(number_of_questions: number): Output {
  const [points, setPoints] = useState(number_of_questions * 10);

  function decreasePoints() {
    setPoints((prev) => prev - 10);
  }

  return {
    points: points,
    correct: points / 10,
    decreasePoints: decreasePoints,
  };
}
