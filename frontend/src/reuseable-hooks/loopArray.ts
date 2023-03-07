import React, {useState} from "react";

type outPut = {
  currentIndex: number;
  isEnd: boolean;
  nextIndex: () => void;
  prevIndex: () => void;
  check: (chances: number) => void;
};

export function useLoopArray(current: number, maxIndexes: number): outPut {
  const [currentIndex, setCurrentIndex] = useState(current);
  const [isEnd, setIsEnd] = useState(false);

  const nextIndex = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevIndex = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const checkEnding = (chances: number) => {
    if ((currentIndex + 1) == maxIndexes && chances >= 0) {
      setIsEnd(true)
    }
  };

  return {
    currentIndex: currentIndex,
    isEnd: isEnd,
    nextIndex: nextIndex,
    prevIndex: prevIndex,
    check: checkEnding,
  };
}
