import React, {useState} from "react";
import axios from "axios";
import {Filter1Sharp} from "@mui/icons-material";

type outPut = {
  api_call: (language: string, filter: string) => void;
  response: {question: string; correct: boolean; topic: string}[];
};

export function useGetHistory(): outPut {
  const [response, setResponse] = useState([{question: "", correct: false, topic: ""}]);

  function getData(language: string, filter: string) {
    axios
      .post("", {
        language: language.toLowerCase(),
        filter: filter == "Correct" ? true : false,
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
