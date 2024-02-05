import { Request } from "express";

import Whatsapp from "@/whatsapp";
import { tryCatch } from "@/utils/tryCatch";
import { MessageBody } from "@/types/messageBody.type";

const controller = tryCatch(async (req: Request) => {
  const message: MessageBody = req.body;

  if (message.isMessage) {
    //
  }

  return Promise.resolve("");
});

export default controller;
