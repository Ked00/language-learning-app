import {Container} from "@mui/material";
import React, {useEffect} from "react";
import {useSpeechRecognition} from "react-speech-recognition";
import useSpeech from "use-speech18";

// components
import {BlockButton} from "../../components/Buttons/BlockButton";
import {LearningLangugaeQuestion} from "../../components/inGame/LearningLanguageQuestion";
import {NativeLanguageTranslation} from "../../components/inGame/NativeLanguageTranslation";
import {Result} from "../../components/inGame/Result";

// hooks
import {useChances} from "../../business-logic/Game/Chances";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {useLoopArray} from "../../reuseable-hooks/loopArray";
import {useVisible} from "../../reuseable-hooks/visible";

import {gameProps} from "../../types/gameProps";
import {Speaking} from "../../components/inGame/Speaking";
import {updateTest} from "../../business-logic/api-calls/updateTest";

export function Game(props: gameProps) {
  const chances = useChances();
  const toggle = useVisible(false);
  const switchPage = useLoopArray(0, props.getInfo.info.sentence);
  const {finalTranscript} = useSpeechRecognition();
  const {Speak, speak_utils} = useSpeech();
  const question = props.getInfo.info.questions.main[switchPage.currentIndex].question;
  const translated = props.getInfo.info.questions.translated[switchPage.currentIndex].question;
  const image = props.getInfo.info.questions.main[switchPage.currentIndex].image;

  useEffect(() => {
    props.getInfo.gameInfo();
    speak_utils.setVoice(speak_utils.Voices[0].name);
    speak_utils.setPitch(2);
    speak_utils.setRate(0.8);
  }, []);

  const next = () => {
    switchPage.check(chances.chancesLeft);
    if (finalTranscript.toLowerCase() === question) {
      switchPage.nextIndex();
      toggle.strict(false);
      props.points.increase();
      updateTest(true, switchPage.currentIndex);
    } else if (chances.chancesLeft === 0) {
      chances.restartChances(2);
      toggle.strict(false);
      switchPage.nextIndex();
    } else {
      chances.decreaseChances();
      props.points.decrease();
      props.points.wrongFunc();
      toggle.strict(false);
    }
  };

  return (
    <div className="vh-100">
      <MainNavbar />

      <div className="text-md-center">
        <h1 className="p-4">{`Sentence ${switchPage.currentIndex + 1} of ${props.getInfo.info.sentence}`}</h1>
        <Container>
          <LearningLangugaeQuestion text={question} />
          <NativeLanguageTranslation text={translated} />
          <div className="text-center mt-5">
            <img
              src={`http://localhost:3000/images/${image}`}
              className="img-fluid"
              width="600px"
              height="600px"
            />
          </div>

          <BlockButton
            type="outlined"
            text="Listen"
            className="w-100 mt-5 text-dark"
            onClick={() => Speak(question)}
          />
          <Speaking
            isVisible={toggle.isVisible}
            toggle={toggle.oppisiteOfCurrent}
            language={props.getInfo.info.option}
          />

          {toggle.isVisible && (
            <Result
              question={question}
              transcript={finalTranscript}
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
