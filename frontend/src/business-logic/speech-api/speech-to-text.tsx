import {createSpeechlySpeechRecognition} from "@speechly/speech-recognition-polyfill";
import SpeechRecognition from "react-speech-recognition";

const appId = "a8f8958d-bdc0-4b6c-be6e-309938b8d614";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export const startListening = (lang: string) => SpeechRecognition.startListening({language: lang});
export const stopListening = () => SpeechRecognition.stopListening;
export const handleMouseDown = (lang: string) => startListening(lang);
export const handleMouseUp = () => stopListening();
