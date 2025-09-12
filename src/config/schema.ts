import { z } from "zod";

export const contactSchema = z.object({
  id: z.string().describe("The ID of the contact"),
  name: z
    .string()
    .min(1, "Name is required")
    .describe("The name of the contact"),
  email: z
    .string()
    .email("Invalid email address")
    .describe("The email of the contact"),
  phoneNumber: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .max(15, "Phone number must be less than 15 digits")
    .describe("The phone number of the contact"),
  avatarUrl: z
    .string()
    .optional()
    .default("")
    .describe("The avatar of the contact"),
  isActive: z.boolean().default(true).describe("Whether the contact is active"),
  notes: z.string().optional().describe("The notes of the contact"),
  createdAt: z.date().describe("The date the contact was created"),
  updatedAt: z.date().describe("The date the contact was updated").optional(),
});

export const conversationSchema = z.object({
  id: z.string().describe("The ID of the conversation"),
  contactId: z
    .string()
    .min(1, "Contact ID is required")
    .describe("The ID of the contact"),

  lastMessage: z
    .string()
    .optional()
    .default("")
    .describe("The last message of the conversation"),
  lastMessageAt: z
    .date()
    .optional()
    .describe("The date the last message was sent"),
  // TODO: Refine - if lastMessage is not provided, lastMessageId is not required
  lastMessageId: z
    .string()
    .min(1, "Last message ID is required")
    .describe("The ID of the last message"),
  unreadCount: z.number().default(0).describe("The number of unread messages"),
  lastMessageStatus: z
    .enum(["pending", "sent", "delivered", "read", "failed"])
    .default("pending")
    .describe("The status of the last message"),
  isActive: z
    .boolean()
    .default(true)
    .describe("Whether the conversation is active"),
  createdAt: z.date().describe("The date the conversation was created"),
  updatedAt: z
    .date()
    .describe("The date the conversation was updated")
    .optional(),
});

export const messageSchema = z.object({
  id: z.string().describe("The ID of the message"),
  contactId: z
    .string()
    .min(1, "Contact ID is required")
    .describe("The ID of the contact"),
  conversationId: z
    .string()
    .min(1, "Conversation ID is required")
    .describe("The ID of the conversation"),
  content: z
    .string()
    .min(1, "Content is required")
    .describe("The content of the message"),
  senderId: z
    .string()
    .min(1, "Sender ID is required")
    .describe("The ID of the sender"),
  receiverId: z
    .string()
    .min(1, "Receiver ID is required")
    .describe("The ID of the receiver"),
  mediaType: z.string().optional().describe("The type of the media"),
  mediaUrl: z.string().optional().describe("The URL of the media"),
  direction: z
    .enum(["inbound", "outbound"])
    .describe("The direction of the message"),
  currentStatus: z
    .enum(["pending", "sent", "delivered", "read", "failed"])
    .default("pending")
    .describe("The current status of the message"),
  statusHistory: z
    .array(
      z.object({
        status: z.enum(["pending", "sent", "delivered", "read", "failed"]),
        at: z.date().describe("The date the status was updated"),
        reason: z
          .string()
          .optional()
          .describe("The reason for the status change"),
      })
    )
    .describe("The status history of the message"),
  isActive: z.boolean().default(true).describe("Whether the message is active"),
  createdAt: z.date().describe("The date the message was created"),
  updatedAt: z.date().describe("The date the message was updated").optional(),
});
