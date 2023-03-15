import React from "react";

type Props = {
  width: string;
  height: string;
};

export function Logo(props: Props) {
  return (
    <img
      src="http://localhost:3000/images/logo.png"
      width={props.width}
      height={props.height}
    />
  );
}
