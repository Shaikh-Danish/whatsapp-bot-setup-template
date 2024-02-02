import { Request } from "express";

import Whatsapp from "@/whatsapp";
import WhatsAppMessage from "@/types/messageBody.type";
import { tryCatch } from "@/utils/tryCatch";

const controller = tryCatch(async (req: Request) => {
  const message: WhatsAppMessage = req.body;

  if (message.isMessage) {
    //
  }

  return Promise.resolve("");
});

export default controller;
