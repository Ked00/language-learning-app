import express, {NextFunction, Request, Response} from "express";
import {questionList} from "../../questions/questions";

const router = express.Router()

router.post("/setGameInfo", (req: Request, res: Response, next: NextFunction) => {
  const {language, subject, gameType, sentences} = req.body;

  let sentence;
  if (sentences === "10 sentences") {
    sentence = 10;
  } else if (sentences === "20 sentences") {
    sentence = 20;
  } else {
    sentence = 30;
  }

  req.session.gameInfo = {
    Language: language,
    Subject: subject,
    GameType: gameType === "Cool: You have 45 sec to answer each sentence" ? 45 : 30,
    Sentences: sentence,
  };
  res.sendStatus(200);
});

router.get("/getGameInfo", (req: Request, res: Response) => {
  res.send(req.session.gameInfo);
});

router.post("/setEndGameResults", (req: Request, res: Response) => {
  const {seconds, minutes, points, correct, wrong} = req.body;
  req.session.results = {seconds, minutes, points, correct, wrong};
  res.sendStatus(200);
});

router.get("/getEndGameResults",(req: Request, res: Response) => {
  console.log(req.session.results);
  res.send(req.session.results);
});

module.exports = router;
