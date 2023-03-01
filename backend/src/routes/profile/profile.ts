import express, {Response, Request, NextFunction} from "express";
import userModel from "../../models/user";
const router = express.Router();

router.post("/edit", async (req: Request, res: Response) => {
  const user = req.body;

  try {
    await userModel.findOneAndUpdate(
      {email: user.email},
      {
        first_name: user.first_name,
        last_name: user.last_name,
        native_language: user.native_language,
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.get("/profileInfo", (req: Request, res: Response) => {
  const user = req.session.userInfo;

  if (user!.isLoggedIn) {
    res.send(user!.email);
  }
});

module.exports = router;
