import { Request, Response, NextFunction } from "express";

import Whatsapp from "@/whatsapp";
import WhatsAppMessage from "@/types/messageBody.type";

const parse = (req: Request, res: Response, next: NextFunction) => {
  try {
    const message: WhatsAppMessage = Whatsapp.parseMessage(req.body);
    req.body = message;
    next();
  } catch (err) {
    // ignore
  }
};

export default parse;
