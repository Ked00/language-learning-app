import express, {Request, Response} from "express";
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.send(req.session.stats);
});

module.exports = router;
