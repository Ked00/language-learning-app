import React from "react";

type outPut = {
  currentIndex: number;
  nextIndex: () => void;
  prevIndex: () => void;
  end: boolean;
  check: () => void;
};

type chances = {
  chances: number;
  setChances: () => void;
};

export function useNext(
  page: outPut,
  questions: {LL: string; NL: string; img: string}[],
  chances: chances,
  trans: string,
  points: () => void,
  result: (show:boolean)=>void
) {
  page.check();

  if (trans.toLowerCase() === questions[page.currentIndex].LL.toLowerCase()) {
    page.nextIndex();
    points();
    result(false);
  } else if (chances.chances === 0) {
    chances.setChances();
    result(false);
    page.nextIndex();
  } else {
    chances.setChances();
    result(false);
  }
}