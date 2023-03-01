import React, {MouseEvent} from "react";

type Props = {
  select: (event: MouseEvent<HTMLInputElement>) => void;
  text: string;
};

export function SubjectItems(props: Props) {
  return (
    <>
      <p className="fs-5 border-bottom border-dark my-4" onClick={props.select}>
        {props.text}
      </p>
    </>
  );
}
