import { Request, Response, NextFunction } from "express";

import Whatsapp from "@/whatsapp";

const parse = (req: Request, res: Response, next: NextFunction) => {
  try {
    const message = Whatsapp.parseMessage(req.body);
    req.body = message;
    next();
  } catch (err) {
    // ignore
  }
};

export default parse;
