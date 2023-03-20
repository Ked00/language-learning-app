import React, {useState} from "react";
import axios from "axios";

type outPut = {
  api_call: (language: string) => void;
  response: {correct: number; incorrect: number; points: number}[];
};

export function useGetHistory(): outPut {
  const [response, setResponse] = useState([{correct: 0, incorrect: 0, points: 0}]);

  function getData(language: string) {
    axios
      .post("history", {
        language: language.toLowerCase(),
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => console.log(err));
  }

  return {
    api_call: getData,
    response: response,
  };
}
