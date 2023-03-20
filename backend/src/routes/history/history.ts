import express, {Request, Response} from "express";
const router = express.Router();
import { questionList } from "../../questions/questions";

router.post("/", (req: Request, res: Response) => {
  const language = req.body.language;
  const questions = questionList[language as keyof typeof questionList];
  let list:{}[] = [];

  console.log(req.session.stats);
  res.send(list);
});

module.exports = router;