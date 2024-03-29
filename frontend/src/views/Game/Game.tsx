import {Container} from "@mui/material";
import React, {useEffect} from "react";
import {useSpeechRecognition} from "react-speech-recognition";
import useSpeech from "use-speech18";

// components
import {BlockButton} from "../../components/Buttons/BlockButton";
import {LearningLangugaeQuestion} from "../../components/inGame/LearningLanguageQuestion";
import {NativeLanguageTranslation} from "../../components/inGame/NativeLanguageTranslation";
import {Result} from "../../components/inGame/Result";
import { TopicImage } from "../../components/inGame/TopicImage";

// hooks
import {useChances} from "../../business-logic/Game/Chances";
import {NavigationNavbar} from "../../components/Navigation/NavigationNavbar";
import {usePageInfo} from "../../reuseable-hooks/pageInfo";
import {useVisible} from "../../reuseable-hooks/visible";

import {gameProps} from "../../business-logic/types/gameProps";
import {Speaking} from "../../components/inGame/Speaking";

export function Game(props: gameProps) {
  const chances = useChances();
  const toggle = useVisible(false);
  const pages = usePageInfo(0, props.getInfo.info.sentence);
  const {finalTranscript} = useSpeechRecognition();
  const {Speak, speak_utils} = useSpeech();
  const question = props.getInfo.info.questions.main[pages.currentPage].question;
  const translated = props.getInfo.info.questions.translated[pages.currentPage].question;
  const image = props.getInfo.info.questions.main[pages.currentPage].image;

  useEffect(() => {
    props.getInfo.gameInfo();
    speak_utils.setVoice(speak_utils.Voices[0].name);
    speak_utils.setPitch(2);
    speak_utils.setRate(0.8);
  }, []);

  const next = () => {
    pages.checkForMorePages(chances.chancesLeft);
    if (finalTranscript.toLowerCase() === question.toLowerCase()) {
      pages.nextPage();
      toggle.strict(false);
      props.points.increase();
      chances.restartChances(2);
    } else if (chances.chancesLeft === 0) {
      chances.restartChances(2);
      toggle.strict(false);
      pages.nextPage();
    } else {
      chances.decreaseChances();
      props.points.decrease();
      props.points.wrongFunc();
      toggle.strict(false);
    }
  };

  return (
    <div className="vh-100">
      <NavigationNavbar />
      <div className="text-md-center">
        <h1 className="p-4">{`Sentence ${pages.currentPage + 1} of ${
          props.getInfo.info.sentence
        }`}</h1>
        <Container>
          <LearningLangugaeQuestion text={question} />
          <NativeLanguageTranslation text={translated} />
          <TopicImage image={image} />
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
              end={pages.noMorePages}
              onClick={next}
            />
          )}
        </Container>
      </div>
    </div>
  );
}
