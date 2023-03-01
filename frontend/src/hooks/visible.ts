import React, {useState} from "react";

type visibilityControls = {
  isVisible: boolean;
  controlVisibility: () => void;
};

export function useVisible(visible: boolean):visibilityControls {
  const [open, SetOpen] = useState(visible);

  const control =()=>{
    SetOpen(prev => !prev)
  }

  return {
    controlVisibility: control,
    isVisible: open
  }
}
