import {Container} from "@mui/material";
import {useEffect} from "react";
import {useSpeechRecognition} from "react-speech-recognition";

// components
import {BlockButton} from "../../components/Buttons/BlockButton";
import {LearningLangugaeQuestion} from "../../components/inGame/LearningLanguageQuestion";
import {NativeLanguageTranslation} from "../../components/inGame/NativeLanguageTranslation";
import {Result} from "../../components/inGame/Result";

// logic
import {handleMouseDown, handleMouseUp} from "../../business-logic/speech-api/speech-to-text";
// import "../../business-logic/Game/Next"
import {useGameInfo} from "../../business-logic/Game/GameSettings";
import {questions} from "../../business-logic/question";

// hooks
import {useChances} from "../../business-logic/Game/Chances";
import {useEndGameStats} from "../../business-logic/Game/EndGameStats";
import {usePoints} from "../../business-logic/Game/points";
import {useTimerHook} from "../../business-logic/timer/timer";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {useLoopArray} from "../../reuseable-hooks/loopArray";
import {useVisible} from "../../reuseable-hooks/visible";

export function Game() {
  const chances = useChances();
  const toggle = useVisible(false);
  const getInfo = useGameInfo();
  const {seconds} = useTimerHook(getInfo.info.time);
  const points = usePoints(getInfo.info.sentence);
  const switchPage = useLoopArray(9, getInfo.info.sentence); //check ending needs to be fixed
  const setStats = useEndGameStats();
  const {finalTranscript} = useSpeechRecognition();
  // const next = useNext(switchPage, questions, chances, finalTranscript, points.setPoints,toggle.oppisiteOfCurrent);
  // seconds,getInfo.info.sentence, points.correct, points.points

  // fix end button
  // get minutes

  const handleUp = () => {
    handleMouseUp();
    toggle.oppisiteOfCurrent();
  };

  useEffect(() => {
    getInfo.gameInfo();
  }, []);
  
  const next = () => {
    switchPage.check(chances.chancesLeft);
    if (finalTranscript.toLowerCase() === questions[switchPage.currentIndex].LL.toLowerCase()) {
      switchPage.nextIndex();
      toggle.strict(false);
    } else if (chances.chancesLeft === 0) {
      chances.restartChances(2);
      toggle.strict(false);
      switchPage.nextIndex();
    } else {
      chances.decreaseChances();
      points.decreasePoints();
      toggle.strict(false);
    }
  };

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
              chances={chances.chancesLeft}
              show={toggle.isVisible}
              end={switchPage.isEnd}
              onClick={next}
            />
          )}
        </Container>
      </div>
    </div>
  );
}
