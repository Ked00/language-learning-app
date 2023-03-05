import React, {useState} from "react";

type visibilityControls = {
  isVisible: boolean;
  oppisiteOfCurrent: () => void;
  strict: (show: boolean) => void;
};

export function useVisible(visible: boolean): visibilityControls {
  const [open, SetOpen] = useState(visible);

  const oppisiteOfCurrent = () => {
    SetOpen((prev) => !prev);
  };

  const strict = (show: boolean) => {
    SetOpen(show);
  };

  return {
    oppisiteOfCurrent: oppisiteOfCurrent,
    isVisible: open,
    strict: strict
  };
}
