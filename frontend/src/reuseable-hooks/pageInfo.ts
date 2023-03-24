import React, {useState} from "react";

type outPut = {
  currentPage: number;
  noMorePages: boolean;
  nextPage: () => void;
  prevPage: () => void;
  checkForMorePages: (chances: number) => void;
};

export function usePageInfo(current: number, maxIndexes: number): outPut {
  const [currentPage, setCurrentIndex] = useState(current);
  const [noMorePages, setNoMorePages] = useState(false);

  const nextPage = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const checkForMorePages = (chances: number) => {
    if ((currentPage + 1) == maxIndexes && chances >= 1) {
      setNoMorePages(true)
    }
  };

  return {
    currentPage: currentPage,
    noMorePages: noMorePages,
    nextPage: nextPage,
    prevPage: prevPage,
    checkForMorePages: checkForMorePages,
  };
}
