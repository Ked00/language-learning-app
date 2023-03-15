import axios from "axios";

export function updateTest(correct: boolean, index: number) {
  axios
    .post("quiz/updateTest", {
      correct: correct,
      index: index,
    })
    .catch((err) => console.log(err));
}
