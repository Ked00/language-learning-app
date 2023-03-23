import React from "react";
import {FormControl} from "@mui/material/";

// components
import {NavigationNavbar} from "../../components/Navigation/NavigationNavbar";
import {SelectOption} from "../../components/Inputs/SelectOption";
import {BlockButton} from "../../components/Buttons/BlockButton";

// logic
import {companyInfo} from "../../business-logic/types/companyInfo";
import {usePopulateObject} from "../../reuseable-hooks/populateObject";
import {useSendGameInfo} from "../../business-logic/Game/useSendGameInfo";

export function GamePrep() {
  const object = usePopulateObject();
  const sendInfo = useSendGameInfo();

  return (
    <div className="vh-100 border">
      <NavigationNavbar />
      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="p-md-5 p-4 mt-md-1 mt-3">Select your game</h1>
        <FormControl className="w-75 d-flex align-items-center">
          <SelectOption
            label="Select object"
            id="language"
            getValue={object.newProperty}
            item={[{text: "Spanish"}, {text: "English"}]}
          />
          <SelectOption
            label="Subject"
            id="subject"
            getValue={object.newProperty}
            item={[{text: "Greetings"}]}
          />
          <SelectOption
            label="Game type"
            id="game-type"
            getValue={object.newProperty}
            item={[
              {text: "Stress: You have 30 sec to answer each sentence"},
              {text: "Cool: You have 45 sec to answer each sentence"},
            ]}
          />
          <SelectOption
            label="Sentences"
            id="sentences"
            getValue={object.newProperty}
            item={[{text: "10 sentences"}, {text: "20 sentences"}]}
          />
          <BlockButton
            text="Speak"
            type="contained"
            background={companyInfo.company_color}
            className="w-75 mt-3"
            onClick={() => sendInfo.sendThenRedirect(object.values)}
          />
        </FormControl>
      </div>
    </div>
  );
}
