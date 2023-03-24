import React from "react";

type Props = {
  image: string
}

export function TopicImage(props: Props) {
  return (
    <div className="text-center mt-5">
      <img
        src={`http://localhost:3000/images/${props.image}`}
        className="img-fluid"
        width="600px"
        height="600px"
      />
    </div>
  );
}
