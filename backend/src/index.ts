import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
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
      languageOption: string;
    };
    results: {
      seconds: number;
      minutes: number;
      points: number;
      correct: number;
      wrong: number;
    };
    stats: {correct: number; incorrect: number; points: number}[];
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
    saveUninitialized: true,
    store: MongoStore.create({
      collectionName: "sessions",
      mongoUrl:
        "mongodb+srv://allorganizedspace:h4dZj0lVS1ALVP0U@cluster0.9lvmotd.mongodb.net/?retryWrites=true&w=majority",
    }),
    cookie: {maxAge: 3600000000000}, //100 years
  })
);

// routes
app.use("/auth", require("./routes/authentication/auth"));
app.use("/profile", require("./routes/profile/profile"));
app.use("/quiz", require("./routes/quiz/quiz"));
app.use("/history", require("./routes/history/history"));
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://allorganizedspace:h4dZj0lVS1ALVP0U@cluster0.9lvmotd.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected");
  }
);

app.listen(3600, () => {
  console.log("server started");
});
