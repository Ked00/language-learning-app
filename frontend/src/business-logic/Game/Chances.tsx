import React, {useState} from "react";

type Output = {
  chancesLeft: number;
  decreaseChances: () => void;
  restartChances: (num: number) => void;
};

export function useChances(): Output {
  const [chances, setChances] = useState(2);

  function decreaseChances() {
    setChances((prev) => prev - 1);
  }

  function restartChances(num: number) {
    setChances(num);
  }

  return {
    chancesLeft: chances,
    decreaseChances: decreaseChances,
    restartChances: restartChances,
  };
}
