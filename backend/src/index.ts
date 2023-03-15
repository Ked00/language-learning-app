import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import RedisStore from "connect-redis";
import {createClient} from "redis";
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
  }
}

let redisClient = createClient({
  url: "redis://default:P3EINnDxNqGxmxZ5y2S92S8rAUsj4LC9@redis-13926.c15.us-east-1-4.ec2.cloud.redislabs.com:13926",
});
redisClient.connect().catch(console.error);

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "language-app",
});

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(
  session({
    secret: "the_guy_from_upwork",
    resave: false,
    saveUninitialized: false,
    store: redisStore,
  })
);

// routes
app.use("/auth", require("./routes/authentication/auth"));
app.use("/profile", require("./routes/profile/profile"));
app.use("/quiz", require("./routes/quiz/quiz"));
app.use("/history", require("./routes/history/history"));
app.use(express.static('public'))

mongoose.connect(
  "mongodb+srv://allorganizedspace:h4dZj0lVS1ALVP0U@cluster0.9lvmotd.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected");
  }
);

app.listen(3600, () => {
  console.log("server started");
});
