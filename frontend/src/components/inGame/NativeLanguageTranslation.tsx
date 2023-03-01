import React from "react";

type Props = {
  text: string;
};

export function NativeLanguageTranslation(props: Props) {
  return (
    <div className="mb-md-5">
      <img
        src={require("../../images/logo.png")}
        width="30px"
        height="30px"
        className="me-3 img-fluid"
      />
      <span>{props.text}</span>
    </div>
  );
}
