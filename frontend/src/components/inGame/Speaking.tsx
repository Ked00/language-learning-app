import React from "react";
import {Button} from "@mui/material";

import {companyInfo} from "../../business-logic/types/companyInfo";
import {handleMouseDown, handleMouseUp} from "../../business-logic/speech-api/speech-to-text";

type Props = {
  isVisible: boolean;
  toggle: () => void;
  language: string;
};

export function Speaking(props: Props) {
  const handleUp = () => {
    handleMouseUp();
    props.toggle();
  };

  return (
    <>
        <Button
          variant="contained"
          className="w-100 my-3 p-3 text-dark"
          sx={{background: companyInfo.company_color}}
          onMouseDown={() => handleMouseDown(props.language)}
          onTouchStart={() => handleMouseDown(props.language)}
          onMouseUp={handleUp}
          onTouchEnd={handleUp}
        >
          {!props.isVisible ? "Start Speaking" : "Stop Speaking"}
        </Button>
    </>
  );
}
