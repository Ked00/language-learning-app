import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
const app = express();

declare module "express-session" {
  interface SessionData {
    userInfo: {
      isLoggedIn: boolean;
      email: string;
    };
    gameInfo: {
      Language: string;
      Subject: string;
      GameType: number;
      Sentences: number;
    };
    results: {
      seconds: number;
      minutes: number;
      points: number;
      correct: number;
      wrong: number;
    };
  }
}

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(
  session({
    secret: "the_guy_from_upwork",
    resave: false,
    saveUninitialized: false,
  })
);

// routes
app.use("/auth", require("./routes/authentication/auth"));
app.use("/profile", require("./routes/profile/profile"));
app.use("/quiz", require("./routes/quiz/quiz"));
app.use("/history", require("./routes/history/history"))

mongoose.connect(
  "mongodb+srv://allorganizedspace:h4dZj0lVS1ALVP0U@cluster0.9lvmotd.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected");
  }
);

app.listen(3500, () => {
  console.log("server started");
});
