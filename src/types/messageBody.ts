interface Metadata {
  display_phone_number: string;
  phone_number_id: string;
}

interface Profile {
  name: string;
}

interface Contacts {
  profile: Profile;
  wa_id: string;
}

interface From {
  name: string | null;
  phone: string;
  message_id: string;
}

interface TextMessage {
  body: string;
}

interface Interactive {
  type: string;
  button_reply?: ButtonReply;
  list_reply?: ButtonReply;
}

interface ButtonReply {
  id: string;
  title: string;
}

interface Media {
  mime_type: string;
  sha256: string;
  id: string;
}

interface Document extends Media {
  filename: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Name {
  first_name: string;
  last_name: string;
  formatted_name: string;
}

interface Phone {
  phone: string;
  wa_id: string;
  type: string;
}

interface Contact {
  name: Name;
  phones: Phone[];
}

interface Audio extends Media {
  voice: boolean;
}

interface Thread {
  from: From;
}

interface Message {
  from: From;
  timestamp: string;
  type?: string;
  text?: TextMessage;
  interactive?: Interactive;
  image?: Media;
  video?: Media;
  document?: Document;
  location?: Location;
  contacts?: Contact[];
  audio?: Audio;
  thread: Thread | null;
  message_id: string;
}

interface WhatsAppMessage {
  metadata: Metadata;
  contacts: Contacts;
  WABA_ID: string;
  isNotificationMessage: boolean;
  isMessage: boolean;
  message: Message;
}

export default WhatsAppMessage;
