import React, {useState} from "react";

type outPut = {
  selected: string;
  setSelected: (value:string) => void;
};

export function useSelected():outPut {
  const [selected, SetSelected] = useState("");
  const updateSelected = (value:string) => {
    SetSelected(value);
  };

  return {
    selected:selected,
    setSelected: updateSelected
  };
}