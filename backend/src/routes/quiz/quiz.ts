import express, {NextFunction, Request, Response} from "express";
import {questionList} from "../../questions/questions";

const router = express.Router();

router.post("/setGameInfo", (req: Request, res: Response, next: NextFunction) => {
  const {language, subject, gameType, sentences} = req.body;
  let sentence;

  if (sentences === "10 sentences") {
    sentence = 10;
  } else {
    sentence = 20;
  }

  req.session.gameInfo = {
    Language: language,
    languageOption: language == "spanish" ? "es-MX" : "en-US",
    Subject: subject,
    GameType: gameType === "Cool: You have 45 sec to answer each sentence" ? 45 : 30,
    Sentences: sentence,
  };
  res.sendStatus(200);
});

router.get("/getGameInfo", (req: Request, res: Response) => {
  const language = req.session.gameInfo!.Language.toLowerCase();
  const translated = language === "spanish" ? "english" : "spanish";
  const main = questionList[language as keyof typeof questionList];

  res.send({
    details: req.session.gameInfo,
    questions: {
      main: main,
      translated: questionList[translated as keyof typeof questionList],
    },
  });
});

router.post("/updateTest", (req: Request, res: Response) => {
  const correct: number = req.body.correct;
  const incorrect: number = req.body.incorrect;
  const points: number = req.body.points;

  req.session.stats = {
    correct: correct,
    incorrect: incorrect,
    points: points,
  };

  req.session.save();

  console.log(req.session.stats);
});

module.exports = router;
