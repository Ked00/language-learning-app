import React, {useState, ChangeEvent} from "react";

type outPut = {
  userInput: {[key: string]: string};
  updateInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function useUpdateInputValue(): outPut {
  const [userInput, setUserInput] = useState({});

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const newValue = e.target.value;

    setUserInput((prev) => {
      return {...prev, [name]: newValue};
    });

  };

  return {
    userInput: userInput,
    updateInput: updateInput,
  };
}
