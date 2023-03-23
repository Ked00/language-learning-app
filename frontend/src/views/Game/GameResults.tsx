import React from "react";
import {Container, Stack} from "react-bootstrap";
import {NavigationNavbar} from "../../components/Navigation/NavigationNavbar";
import {StatsCard} from "../../components/Cards/StatsCard";
import {BlockButton} from "../../components/Buttons/BlockButton";

import {updateTest} from "../../business-logic/api-calls/updateTest";

import {results} from "../../business-logic/Game/gameinfo";
import {useNavigate} from "react-router-dom";

export function GameResults(props: results) {
  const {correct, points, totalSentences} = props;
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
          <StatsCard label="Score: " content={`${points} points`} />
          <StatsCard label="Results: " content={`${correct} / ${totalSentences} `} />
        </div>
        <Stack gap={3} className="mt-3 ms-4">
          <BlockButton
            type="outlined"
            text="Submit Test"
            onClick={() => updateTest(correct, totalSentences, points)}
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
