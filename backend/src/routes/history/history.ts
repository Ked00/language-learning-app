import express, {Request, Response} from "express";
const router = express.Router();
import { questionList } from "../../questions/questions";

router.post("/", (req: Request, res: Response) => {
  const language = req.body.language;
  const filter = req.body.filter;
  const questions = questionList[language as keyof typeof questionList];
  let list:{}[] = [];

  for (let i = 0; i < questions.length; i++) {
    if ((questions[i].correct == filter)) {
      list.push(questions[i])
    }
  }
  res.send(list);
});

module.exports = router;