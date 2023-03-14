import React, {useState, ChangeEvent} from "react";
import {FormControl} from "@mui/material/";
import {useNavigate} from "react-router-dom";
import axios from "axios";

// components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {SelectOption} from "../../components/Inputs/SelectOption";
import {BlockButton} from "../../components/Buttons/BlockButton";

// logic
import {companyInfo} from "../../types/companyInfo";
import {useObject} from "../../reuseable-hooks/stateObject";

export function GamePrep() {
  const navigate = useNavigate();
  const object = useObject();


  const move = () => {
    axios
      .post("quiz/setGameInfo", {
        language: language,
        subject: subject,
        gameType: type,
        sentences: sentence,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/game");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="vh-100 border">
      <MainNavbar />
      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="p-md-5 p-4 mt-md-1 mt-3">Select your game</h1>
        <FormControl className="w-75 d-flex align-items-center">
          <SelectOption
            label="Select language"
            id="language"
            getValue={object.addKeyvalue}
            item={[{text: "Spanish"}, {text: "English"}]}
          />
          <SelectOption
            label="Subject"
            id="Subject"
            getValue={object.addKeyvalue}
            item={[{text: "Greetings"}]}
          />
          <SelectOption
            label="Game type"
            id="game-type"
            getValue={object.addKeyvalue}
            item={[
              {text: "Stress: You have 30 sec to answer each sentence"},
              {text: "Cool: You have 45 sec to answer each sentence"},
            ]}
          />
          <SelectOption
            label="Sentences"
            id="sentences"
            getValue={object.addKeyvalue}
            item={[{text: "10 sentences"}, {text: "20 sentences"}]}
          />
          <BlockButton
            text="Speak"
            type="contained"
            background={companyInfo.company_color}
            className="w-75 mt-3"
            // onClick={move}
          />
        </FormControl>
      </div>
    </div>
  );
}
