export interface MessageBody {
  isNotificationMessage: boolean;
  isMessage: boolean;
  message?: ResponseMessage;
  notificationType?: string;
  notificationMessage?: {
    id: string;
    status: string;
    timestamp: string;
    recipient_id: string;
    from: {
      name: null;
      phone: string;
    };
    errors?: Error[];
  };
}

interface ResponseMessage {
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
}
interface From {
  name: string | null;
  phone: string;
  message_id?: string;
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

interface Contact {
  name: Name;
  phones: Phone[];
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

interface Audio extends Media {
  voice: boolean;
}

interface Thread {
  from: From;
}
