import React from "react";

type Props = {
  text: string;
};

export function LearningLangugaeQuestion(props: Props) {
  return (
    <div className="mb-3">
      <img
        src="http://localhost:3000/images/logo.png"
        width="30px"
        height="30px"
        className="me-3 img-fluid"
      />
      <span className="fw-bold w-100">{props.text}</span>
    </div>
  );
}