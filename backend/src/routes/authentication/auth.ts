import express, {NextFunction, Request, Response} from "express";
import userModel from "../../models/user";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const user: string = req.body.email;
  const matching = await userModel.findOne({email: user});

  if (matching) {
    req.session.userInfo = {email: user, isLoggedIn: true};
    res.send(true);
  } else {
    const newUser = new userModel({
      email: user,
      //   first_name: req.body.first_name,
      //   last_name: req.body.last_name,
      photo: req.body.photo,
    });

    await newUser.save();
    req.session.userInfo = {email: user, isLoggedIn: true};
    res.send(false);
  }
});

router.get("/verify", (req: Request, res: Response) => {
  const status = req.session.userInfo!.isLoggedIn;

  if (status) {
    res.send(status);
  }
});

router.get("/logout", (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(() => {
    console.log("session destroyed");
    next();
  });
});

module.exports = router;
