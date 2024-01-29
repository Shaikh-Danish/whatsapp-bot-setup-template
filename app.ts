import express, { Express, Request, Response } from "express";
// import { tryCatch } from "./src/utils/tryCatch";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("meta_wa_callbackurl", (req: Request, res: Response) => {
  try {
    const mode: unknown = req.query["hub.mode"];
    const token: unknown = req.query["hub.verify_token"];
    const challenge: unknown = req.query["hub.challenge"];

    if (mode && token && mode === "subscribe" && token === "123") {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    return res.sendStatus(500);
  }
});

app.post("meta_wa_callbackurl", (req: Request, res: Response) => {
  console.log(req, res);
});

export default app;
