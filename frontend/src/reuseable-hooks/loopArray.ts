import React, {useState} from "react";

type outPut = {
  currentIndex: number;
  nextIndex: () => void;
  prevIndex: () => void;
  end: boolean;
  check: () => void;
};

export function useLoopArray(num: number, max: number): outPut {
  const [currentIndex, setCurrentIndex] = useState(num);
  const [end, setEnd] = useState(true);

  const nextIndex = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevIndex = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const checkEnding = () => {
    if (currentIndex) {
    }
  };

  return {
    currentIndex: currentIndex,
    nextIndex: nextIndex,
    prevIndex: prevIndex,
    end: end,
    check: checkEnding,
  };
}
