import React, {useState} from "react";
import axios from "axios";

type outPut = {
  api_call: (language: string, filter: string) => void;
};

export function useGetHistory(): outPut {

  function getData(language: string, filter: string) {
    axios
      .post("", {
        language: language.toLowerCase(),
        filter: filter == "Correct" ? true: false,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  return {
    api_call: getData,
  };
}
