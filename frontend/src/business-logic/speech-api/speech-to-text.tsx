import {createSpeechlySpeechRecognition} from "@speechly/speech-recognition-polyfill";
import SpeechRecognition from "react-speech-recognition";

const appId = "a8f8958d-bdc0-4b6c-be6e-309938b8d614";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

// export const {transcript, listening, browserSupportsSpeechRecognition} = useSpeechRecognition();

export const startListening = () =>SpeechRecognition.startListening();
export const stopListening = () => SpeechRecognition.stopListening;

// if (!browserSupportsSpeechRecognition) {
//   return <span>Browser doesn't support speech recognition.</span>;
// }

/* <p>{transcript}</p> */
