import express, {NextFunction, Request, Response} from "express";
import {questionList} from "../../questions/questions";

const router = express.Router();

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
  const language = req.session.gameInfo?.Language.toLowerCase();
  const translated = language === "spanish" ? "english" : "spanish";

  res.send({
    details: req.session.gameInfo,
    questions: {
      main: questionList[language as keyof typeof questionList],
      translated: questionList[translated as keyof typeof questionList],
    },
  });
});

module.exports = router;