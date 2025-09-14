export enum ConversationStatus {
  PENDING = "pending",
  ACTIVE = "active",
  ARCHIVED = "archived",
}

export enum MessageStatus {
  PENDING = "pending",
  SENT = "sent",
  DELIVERED = "delivered",
  READ = "read",
  FAILED = "failed",
}

export enum MessageDirection {
  INBOUND = "inbound",
  OUTBOUND = "outbound",
}

export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  DOCUMENT = "document",
  OTHER = "other",
}

export enum FieldType {
  CONTACTS = "contacts",
  CONVERSATIONS = "conversations",
  MESSAGES = "messages",
}
