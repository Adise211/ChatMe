import { z } from "zod";
import {
  contactSchema,
  conversationSchema,
  messageSchema,
  newContactSchema,
  newConversationSchema,
  newMessageSchema,
} from "./schema";

export type Contact = z.infer<typeof contactSchema>;
export type Conversation = z.infer<typeof conversationSchema>;
export type Message = z.infer<typeof messageSchema>;

export type NewContact = z.infer<typeof newContactSchema>;
export type NewConversation = z.infer<typeof newConversationSchema>;
export type NewMessage = z.infer<typeof newMessageSchema>;
