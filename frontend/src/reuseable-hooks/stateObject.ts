import React, {useState} from "react";

export function useObject() {
  const [objectState, setObjectState] = useState({});

  const setApi = (text: string, id: string) => {
    setObjectState((prev) => {
      return {...prev, [id]: text};
    });
  };

  return {
    addKeyvalue: setApi,
    object: objectState,
  };
}
