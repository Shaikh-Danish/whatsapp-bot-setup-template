import { Request } from "express";

import WhatsAppMessage from "@/types/messageBody.type";

const controller = (req: Request) => {
  const message: WhatsAppMessage = req.body;

  if (isMessage(message)) {
    console.log(message);
  }
};

function isMessage(message: WhatsAppMessage): boolean {
  return message.isMessage;
}

export default controller;
