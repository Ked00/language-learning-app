import React, {useState, ChangeEvent} from "react";

type outPut = {
  userInput: {[key:string]: string};
  updateInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function useUpdateInputValue(): outPut {
  const [userInput, setUserInput] = useState({});

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const name = e.target.name;

    setUserInput((prev) => {
      return {...prev, [name]: newValue};
    });
  };

  return {
    userInput: userInput,
    updateInput: updateInput,
  };
}
