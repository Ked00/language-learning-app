import React, {ChangeEvent} from "react";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material/";
import {ExpandMore} from "@mui/icons-material";
// hooks
import {useSelected} from "../../reuseable-hooks/selected";

type Props = {
  label: string;
  id: string;
  item: {text: string}[];
  onClick?: () => void;
  getValue?: (value: string, id: string) => void;
};

export function SelectOption(props: Props) {
  const controlSelected = useSelected();

  function click(text: string, id: string) {
    controlSelected.setSelected(text);
    props.getValue!(text, id)
  }

  const AccordionItems = props.item.map((item, index) => {
    return (
      <AccordionDetails
        key={index}
        onClick={() => click(item.text, props.id)}
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
