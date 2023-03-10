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

// hooks
import {useChances} from "../../business-logic/Game/Chances";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {useLoopArray} from "../../reuseable-hooks/loopArray";
import {useVisible} from "../../reuseable-hooks/visible";

type Props = {
  getInfo: {info: {time: number; sentence: number; questions:{main:[{question: string}], translated:[{question: string}] }}; gameInfo: () => void};
  points: {
    correct: number;
    wrong: number;
    points: number;
    decrease: () => void;
    increase: () => void;
    wrongFunc: () => void;
  };
};

export function Game(props: Props) {
  const chances = useChances();
  const toggle = useVisible(false);
  const switchPage = useLoopArray(0, props.getInfo.info.sentence);
  const {finalTranscript} = useSpeechRecognition();

  const handleUp = () => {
    handleMouseUp();
    toggle.oppisiteOfCurrent();
  };

  useEffect(() => {
    props.getInfo.gameInfo();
  }, []);

  const next = () => {
    switchPage.check(chances.chancesLeft);
    if (finalTranscript.toLowerCase() === props.getInfo.info.questions.main[switchPage.currentIndex].question) {
      switchPage.nextIndex();
      toggle.strict(false);
      props.points.increase();
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
        <h1 className="p-4">{`Sentence ${switchPage.currentIndex + 1} of ${
          props.getInfo.info.sentence
        }`}</h1>
        <Container>
          <LearningLangugaeQuestion text={props.getInfo.info.questions.main[switchPage.currentIndex].question} />
          <NativeLanguageTranslation text={props.getInfo.info.questions.translated[switchPage.currentIndex].question} />
          <div className="text-center mt-5">
            {/* <img
              src={questions[switchPage.currentIndex].img}
              className="img-fluid"
              width="600px"
              height="600px"
            /> */}
          </div>
          <BlockButton type="outlined" text="Listen" className="w-100 mt-5 text-dark" />
          <BlockButton
            type="contained"
            text={!toggle.isVisible ? "Speak" : "Stop Speaking"}
            className="w-100 my-3 text-dark"
            onMouseDown={handleMouseDown}
            onMouseUp={handleUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleUp}
          />

          {toggle.isVisible && (
            <Result
              question={props.getInfo.info.questions.main[switchPage.currentIndex].question}
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
