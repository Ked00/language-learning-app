import React from "react";
import {Container, Stack} from "react-bootstrap";
import {NavigationNavbar} from "../../components/Navigation/NavigationNavbar";
import {PriceCard} from "../../components/Cards/PriceCard";
import {BlockButton} from "../../components/Buttons/BlockButton";

import {updateTest} from "../../business-logic/api-calls/updateTest";

import {gameProps} from "../../types/gameProps";
import {useNavigate} from "react-router-dom";

export function EndGame(props: gameProps) {
  const {correct, points} = props.points;
  const total = props.getInfo.info.sentence;
  const navigate = useNavigate();
  return (
    <div className="vh-100">
      <NavigationNavbar />
      <Container>
        <div className="text-center my-5">
          <h1>Congratulation!</h1>
          <p className="mb-4">You have finished the game</p>
          <img
            src="http://localhost:3000/images/celebration.png"
            width="100%"
            height="100%"
            className="image-fluid"
          />
        </div>
        <p className="my-2 fs-4 text-center">Here is your result</p>
        <div className="d-flex justify-content-center">
          <PriceCard label="Score: " content={`${points} points`} />
          <PriceCard label="Results: " content={`${correct} / ${total} `} />
        </div>
        <Stack gap={3} className="mt-3 ms-4">
          <BlockButton
            type="outlined"
            text="Submit Test"
            onClick={() => updateTest(correct, total, points)}
          />
          <BlockButton
            type="contained"
            text="Try again"
            className="mb-3"
            onClick={() => navigate("/game")}
          />
        </Stack>
      </Container>
    </div>
  );
}