import React, {useEffect} from "react";
import {Container, Stack} from "react-bootstrap";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {PriceCard} from "../../components/Cards/PriceCard";
import {BlockButton} from "../../components/Buttons/BlockButton";

import {updateTest} from "../../business-logic/api-calls/updateTest";

import {gameProps} from "../../types/gameProps";

export function EndGame(props: gameProps) {
  const correct = props.points.correct;
  const total = props.getInfo.info.sentence;
  const points = props.points.points;

  useEffect(() => {
    updateTest(5, 10, 80);
  }, []);

  return (
    <div className="vh-100">
      <MainNavbar />
      <Container>
        <div className="text-md-center my-5">
          <h1>Congratulation!</h1>
          <p className="mb-4">You have finished the game</p>
          <img
            src="http://localhost:3000/images/celebration.png"
            width="100%"
            height="100%"
            className="image-fluid"
          />
        </div>
        <p className="my-2 p-2 fs-4 text-md-center">Here is your result</p>
        <div className="d-flex justify-content-center">
          <PriceCard label="Score: " content={`${points} points`} />
          <PriceCard label="Results: " content={`${correct} / ${total} `} />
        </div>
        <Stack gap={3} className="mt-3 ms-md-4">
          <BlockButton type="outlined" text="Score report" />
          <BlockButton type="contained" text="Play again" className="mb-3" />
        </Stack>
      </Container>
    </div>
  );
}
