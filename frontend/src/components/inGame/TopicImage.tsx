import React from "react";

export function TopicImage() {
  return (
    <div className="text-center mt-5">
      <img
        src={require("../../images/car.png")}
        className="img-fluid"
        width="600px"
        height="600px"
      />
    </div>
  );
}
