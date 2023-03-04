import React, {useState, useEffect} from "react";
import {Container} from "@mui/material";
import {useTimer} from "react-timer-hook";
import axios from "axios";

// components
import {BlockButton} from "../../components/Buttons/BlockButton";
import {LearningLangugaeQuestion} from "../../components/inGame/LearningLanguageQuestion";
import {NativeLanguageTranslation} from "../../components/inGame/NativeLanguageTranslation";
import {TopicImage} from "../../components/inGame/TopicImage";
import {Result} from "../../components/inGame/Result";

// logic
import {
  startListening,
  stopListening,
  finalTranscript,
} from "../../business-logic/speech-api/speech-to-text";

// hooks
import {useLoopArray} from "../../reuseable-hooks/loopArray";
import {useNavigate} from "react-router-dom";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {useVisible} from "../../reuseable-hooks/visible";
import { gameInfo, GameInfoCall } from "../../business-logic/Game/GameInfoCall";
import { usePoints } from "../../business-logic/Game/points";
import { useChances } from "../../business-logic/Game/Chances";

export function Game() {
  const points = usePoints()
  const toggle = useVisible(false);
  const chances = useChances()
  const navigate = useNavigate();
  const switchPage = useLoopArray(0, gameInfo.info.sentence);

  const time = new Date();
  time.setSeconds(time.getSeconds() + gameInfo.info.time);
  const {minutes, seconds} = useTimer({
    expiryTimestamp: time,
    autoStart: true,
  });

  useEffect(() => {
   GameInfoCall()
  }, []);

  const handleMouseDown = () => {
    startListening();
  };

  const handleMouseUp = () => {
    stopListening();
    toggle.controlVisibility();
  };

  const next = () => {
    switchPage.check();

    if (finalTranscript.toLowerCase() === questions[switchPage.currentIndex].LL.toLowerCase()) {
      switchPage.nextIndex();
      points.setPoints()
      setShowResult(false);
    } else if (chances.chances === 0) {
      setChances(2);
      setShowResult(false);
      switchPage.nextIndex();
    } else {
      setChances((prev) => prev - 1);
      setShowResult(false);
    }
  };

  const newPage = async () => {
    axios
      .post("quiz/setGameInfo", {
        seconds: seconds,
        minutes: minutes,
        correct: 21,
        wrong: 9,
        points: points,
      })
      .then((res) => (res.status == 200 ? console.log("data sent") : console.log("error")));
  };

  if (switchPage.end && chances.chances == 0) {
    newPage();
    navigate("/end");
  }

  return (
    <div className="vh-100">
      <MainNavbar />

      <div className="text-md-center">
        <h1 className="p-4">{`Sentence ${switchPage.currentIndex + 1} of ${gameInfo.info.sentence}`}</h1>

        <Container>
          <LearningLangugaeQuestion text={questions[switchPage.currentIndex].LL} />
          <NativeLanguageTranslation text={questions[switchPage.currentIndex].NL} />

          <div className="text-center mt-5">
            <img
              src={questions[switchPage.currentIndex].img}
              className="img-fluid"
              width="600px"
              height="600px"
            />
          </div>

          <BlockButton type="outlined" text="Listen" className="w-100 mt-5 text-dark" />

          <BlockButton
            type="contained"
            text={!toggle ? "Speak" : "Stop Speaking"}
            className="w-100 my-3 text-dark"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          />

          {toggle.isVisible && (
            <Result
              answer={finalTranscript}
              question={questions[switchPage.currentIndex].LL.toLowerCase()}
              chances={chances}
              show={toggle.isVisible}
              onClick={next}
            />
          )}
        </Container>
      </div>
    </div>
  );
}