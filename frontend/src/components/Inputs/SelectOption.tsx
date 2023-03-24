import React from "react";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material/";
import {ExpandMore} from "@mui/icons-material";
// hooks
import {useSelected} from "../../reuseable-hooks/selected";

type Props = {
  label: string;
  id: string;
  optionsList: {text: string}[];
  onClick?: () => void;
  valueOfSelected?: (value: string, id: string) => void;
};

export function SelectOption(props: Props) {
  const controlSelected = useSelected();

  function setNewSelected(text: string, id: string) {
    controlSelected.setSelected(text);
    props.valueOfSelected!(text, id)
  }

  const AccordionItems = props.optionsList.map((item, index) => {
    return (
      <AccordionDetails
        key={index}
        onClick={() => setNewSelected(item.text, props.id)}
        onMouseDown={props.onClick}
        onTouchStart={props.onClick}
      >
        {item.text}
      </AccordionDetails>
    );
  });

  return (
    <>
      <Accordion className="w-75 border border-dark p-2 mb-3 rounded">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={`${props.id}-aria`}
          id={`${props.id}-id`}
        >
          {controlSelected.selected ? controlSelected.selected : props.label}
        </AccordionSummary>
        {AccordionItems}
      </Accordion>
    </>
  );
}
