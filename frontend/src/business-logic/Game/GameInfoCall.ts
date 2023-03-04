import axios from "axios"
import { useGameInfo } from "./GameSettings"

export const gameInfo = useGameInfo()

export function GameInfoCall(){
 axios
      .get("quiz/getGameInfo")
      .then((res) =>
        gameInfo.setInfo({
          time: res.data.GameType,
          sentence: res.data.Sentences,
          subject: res.data.Subject,
          language: res.data.Language,
        })
      )
      .catch((err) => console.log(err));
}