import React, {useState} from "react";

type outPut = {
  currentIndex: number;
  nextIndex: () => void;
  prevIndex: () => void;
  end: boolean;
  check: ()=>void
};

export function useLoopArray(num: number, max: number): outPut {
  const [currentIndex, setCurrentIndex] = useState(num);
  const [end, setEnd] = useState(false);

  const checkEnding = () => {
    if (currentIndex == max - 1) {
      setEnd(true);
    }
  };

  return {
    currentIndex: currentIndex,
    end: end,
    check: checkEnding,
    // a boolean gets passed to nextIndex from the api call which gets passed to the function its calling to
    nextIndex: () => {
      setCurrentIndex((prev) => prev + 1);
    },
    prevIndex: () => {
      setCurrentIndex((prev) => prev - 1);
    },
  };
}
