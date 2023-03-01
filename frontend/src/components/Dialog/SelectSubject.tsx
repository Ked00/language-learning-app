import React, {MouseEvent} from "react";
import {Dialog, Button, Container} from "@mui/material";
import {ArrowDropDown, Close} from "@mui/icons-material";

// hooks
import {useSelected} from "../../hooks/selected";
import {useVisible} from "../../hooks/visible";

// componenets
import {SubjectItems} from "../ParagraphElements/SubjectItems";

type Props = {
  onClick: (value: string) => void;
};

export function SelectSubject(props: Props) {
  const open = useVisible(false);
  const controlSelected = useSelected();

  const selectSubject = (event: MouseEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.innerText;
    controlSelected.setSelected(newInput);
    props.onClick(newInput);
  };

  return (
    <>
      <Button
        variant="outlined"
        className="mb-3 w-75 h-25 border border-dark text-dark rounded"
        onClick={open.controlVisibility}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <p className="mt-3">
            {controlSelected.selected ? controlSelected.selected : "Select Subject"}
          </p>
          <ArrowDropDown />
        </div>
      </Button>

      <Dialog open={open.isVisible} onClose={open.controlVisibility} fullWidth>
        <Container>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <h2>Subject</h2>
            <Close />
          </div>
          <SubjectItems select={selectSubject} text={"Humans"} />
          <SubjectItems select={selectSubject} text={"Animals"} />
          <SubjectItems select={selectSubject} text={"Nature"} />
          <SubjectItems select={selectSubject} text={"Summer"} />
        </Container>
      </Dialog>
    </>
  );
}
