import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("meta_wa_callbackurl", (req: Request, res: Response) => {})

app.get("meta_wa_callbackurl",  (req: Request, res: Response) => {
  try {
    const mode: any = req.query['hub.mode'];
    const token: any = req.query['hub.verify_token'];
    const challenge: any = req.query['hub.challenge'];

    if (mode && token && mode === 'subscribe' && token === "123") {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    return res.sendStatus(500);
  }
})

export default app;
