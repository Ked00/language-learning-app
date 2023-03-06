import React from "react";
import {Dialog, Button, TextField, Container} from "@mui/material";
import {ArrowDropDown, Close} from "@mui/icons-material";

import {languages} from "../../business-logic/gameInfo";

// hooks
import {useVisible} from "../../reuseable-hooks/visible";
import {useSelected} from "../../reuseable-hooks/selected";
import {useUpdateInputValue} from "../../reuseable-hooks/textFieldInput";

type Props = {
  className?: string;
  label: string;
  onChanges?: () => void;
  controlSelected?: {selected: string; setSelected: (value: string) => void};
  onClick?: (value: string) => void;
};

export function SelectLanguage(props: Props) {
  const open = useVisible(false);
  const updateInput = useUpdateInputValue();

  // make its own component
  const allLanguageOptions = languages.map((data, index) => {
    return (
      <div
        className="p-3 overflow-scroll"
        key={index}
        onClick={() => {
          props.controlSelected?.setSelected(data.data);
          // props.onClick!(data.data)
        }}
      >
        {data.data}
      </div>
    );
  });

  const filterOptionList = languages.filter((item) => item.data === updateInput.userInput.language);

  const filteredOptions = filterOptionList.map((item, index) => {
    return <p key={index}>{item.data}</p>;
  });

  return (
    <>
      <Button variant="outlined" className={`${props.className}`} onClick={open.oppisiteOfCurrent}>
        <div className="d-flex justify-content-between align-items-center w-100">
          <p className="mt-3">
            {props.controlSelected?.selected ? props.controlSelected?.selected : props.label}
          </p>
          <ArrowDropDown />
        </div>
      </Button>

      <Dialog open={open.isVisible} onClose={open.oppisiteOfCurrent} fullWidth>
        <Container>
          <div className="d-flex justify-content-between align-items-center my-4 mb-2">
            <h3>{props.label}</h3>
            <Close />
          </div>
          <TextField
            className="w-100 mb-3 p-2"
            placeholder="Search for a langugae..."
            name="language"
            onChange={updateInput.updateInput}
            value={updateInput.userInput.language}
          />

          {filterOptionList.length == 0 ? allLanguageOptions : filteredOptions}
        </Container>
      </Dialog>
    </>
  );
}
