import React, {useState, ChangeEvent} from "react";
import axios from "axios";

type outPut = {
  info: {[key: string]: string};
  getInfo: () => void;
  updateInfoObject: (e: ChangeEvent<HTMLInputElement>) => void;
  postNewInfo: () => void;
};

export function useUserInfo(): outPut {
  const [info, setInfo] = useState({first: "", last: ""});

  function getInfo() {
    axios.get("/profile/profileInfo").then((res) => {
      setInfo((prev) => {
        return {...prev, ["email"]: res.data};
      });
    });
  }

  function updateInfoObject(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setInfo((prev) => {
      return {...prev, [name]: value};
    });
  }

  function postNewInfo() {
    axios.post("/profile/edit", {
      first_name: info.first,
      last_name: info.last!,
    });
  }

  return {
    info: info,
    getInfo: getInfo,
    updateInfoObject: updateInfoObject,
    postNewInfo: postNewInfo,
  };
}
