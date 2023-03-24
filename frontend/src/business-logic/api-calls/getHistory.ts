import React, {useState} from "react";
import axios from "axios";

type outPut = {
  get: (language: string) => void;
  response: {correct: number; totalSentences: number; points: number}[];
};

export function useGetHistory(): outPut {
  const [response, setResponse] = useState([{correct: 0, totalSentences: 0, points: 0}]);

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
    get: getData,
    response: response,
  };
}
