import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import * as dotenv from "dotenv";

dotenv.config();
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
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      collectionName: process.env.SESSION_NAME,
      mongoUrl: process.env.MONGO_URL,
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

mongoose.connect(`${process.env.MONGO_URL}`);
app.listen(process.env.PORT || 3500);
