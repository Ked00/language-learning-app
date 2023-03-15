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
    languageOption: language == "spanish" ? "es-MX" : "en-US",
    Subject: subject,
    GameType: gameType === "Cool: You have 45 sec to answer each sentence" ? 45 : 30,
    Sentences: sentence,
  };
  res.sendStatus(200);
});

router.get("/getGameInfo", (req: Request, res: Response) => {
  const language = req.session.gameInfo?.Language.toLowerCase();
  const translated = language === "spanish" ? "english" : "spanish";
  const main = questionList[language as keyof typeof questionList];

  req.session.main = main;

  res.send({
    details: req.session.gameInfo,
    questions: {
      main: main,
      translated: questionList[translated as keyof typeof questionList],
    },
  });
});

router.post("/updateTest", (req: Request, res: Response) => {
  const correct: boolean = req.body.correct;
  const index: number = req.body.index;

  if(correct){
    req.session.main![index].correct = correct
  }

 console.log(req.session.main)
});

module.exports = router;
