import React, {useState} from "react";

export function usePopulateObject() {
  const [property, setProperty] = useState({});

  const newProperty = (text: string, id: string) => {
    setProperty((prev) => {
      return {...prev, [id]: text};
    });
  };

  return {
    newProperty: newProperty,
    values: property,
  };
}
