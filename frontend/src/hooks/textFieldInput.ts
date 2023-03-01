import React, {useState, ChangeEvent} from "react";

type outPut = {
  userInput: string;
  updateInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function useUpdateInputValue(): outPut {
  const [userInput, setUserInput] = useState("");

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUserInput(newValue);
  };

  return {
    userInput: userInput,
    updateInput: updateInput,
  };
}
