import { z } from "zod";
import { contactSchema, conversationSchema, messageSchema } from "./schema";

export type Contact = z.infer<typeof contactSchema>;
export type Conversation = z.infer<typeof conversationSchema>;
export type Message = z.infer<typeof messageSchema>;

export type FieldType = "contacts" | "conversations" | "messages";
