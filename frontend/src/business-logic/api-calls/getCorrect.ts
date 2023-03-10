import React, {useState} from "react";
import axios from "axios";

type parameters = {
  language: "english" | "spanish";
  filter: "all sentences" | true | false;
};

type outPut = {
  api_call: () => void;
};

export function useGetHistory(): outPut {
  // const [info, setInfo] = useState<parameters>({
  //   language: parameters!.language,
  //   filter: parameters!.filter,
  // });

  function getData() {
    axios
      .post("", {
        language: "spanish",
        filter: "false",
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
