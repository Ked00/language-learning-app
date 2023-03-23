import React, {useState} from "react";

export function useCollect() {
  const [keyValue, setKeyValue] = useState({});

  const setValue = (text: string, id: string) => {
    setKeyValue((prev) => {
      return {...prev, [id]: text};
    });
  };

  return {
    setValue: setValue,
    value: keyValue,
  };
}
