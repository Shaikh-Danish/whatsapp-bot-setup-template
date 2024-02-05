import WhatsappCloud from "wrapper_whatsappcloudapi";

const Whatsapp = new WhatsappCloud({
  accessToken: process.env.Meta_WA_accessToken as string,
  senderPhoneNumberId: process.env.Meta_WA_SenderPhoneNumberId as string,
  WABA_ID: process.env.Meta_WA_wabaId as string,
});

export default Whatsapp;
