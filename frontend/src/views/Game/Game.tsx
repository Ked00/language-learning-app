import React, {useEffect} from "react";
import {Container} from "@mui/material";
import axios from "axios";

// components
import {BlockButton} from "../../components/Buttons/BlockButton";
import {LearningLangugaeQuestion} from "../../components/inGame/LearningLanguageQuestion";
import {NativeLanguageTranslation} from "../../components/inGame/NativeLanguageTranslation";
import {TopicImage} from "../../components/inGame/TopicImage";
import {Result} from "../../components/inGame/Result";

// logic
import {handleMouseUp, handleMouseDown} from "../../business-logic/speech-api/speech-to-text";
// import "../../business-logic/Game/Next"
import {questions} from "../../business-logic/question";
import {useGameInfo} from "../../business-logic/Game/GameSettings";

// hooks
import {useLoopArray} from "../../reuseable-hooks/loopArray";
import {useNavigate} from "react-router-dom";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {useVisible} from "../../reuseable-hooks/visible";
import {usePoints} from "../../business-logic/Game/points";
import {useChances} from "../../business-logic/Game/Chances";
import { useTimerHook } from "../../business-logic/timer/timer";
import { useEndGameStats } from "../../business-logic/Game/EndGameStats";

export function Game() {
  const chances = useChances();
  const getInfo = useGameInfo();
  const points = usePoints(getInfo.info.sentence);
  const toggle = useVisible(false);
  const switchPage = useLoopArray(9, getInfo.info.sentence);
  const {seconds} = useTimerHook(45)
  const setStats = useEndGameStats(seconds,getInfo.info.sentence, points.correct, points.points )

  // fix end button 
  // correct / wrong to api
  // get minutes

  const handleUp = () => {
    handleMouseUp();
    toggle.controlVisibility();
  };

  useEffect(() => {
    getInfo.gameInfo();
  }, []);

  return (
    <div className="vh-100">
      <MainNavbar />

      <div className="text-md-center">
        <h1 className="p-4">{`Sentence ${switchPage.currentIndex + 1} of ${
          getInfo.info.sentence
        }`}</h1>

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
            onMouseUp={handleUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleUp}
          />

          {toggle.isVisible && (
            <Result
              question={questions[switchPage.currentIndex].LL.toLowerCase()}
              chances={chances.chances}
              show={toggle.isVisible}
              end={switchPage.end}
              // onClick={next}
            />
          )}
        </Container>
      </div>
    </div>
  );
}
