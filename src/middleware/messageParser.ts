import { Request } from "express";

import Whatsapp from "@/whatsapp";
import WhatsAppMessage from "@/types/messageBody";

const parse = (req: Request) => {
  const message: WhatsAppMessage = Whatsapp.parseMessage(req.body);
  console.log(message);
};

export default parse;