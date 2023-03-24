import axios from "axios";

export function sendResults(correct: number, incorrect: number, points: number) {
  axios
    .post("quiz/updateTest", {
      correct: correct,
      incorrect: incorrect,
      points: points,
    })
    .catch((err) => console.log(err));
}
