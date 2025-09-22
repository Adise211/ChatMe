// Example usage of ChatMe library
import React, { useState } from "react";
import { ChatMe } from "chatme";
import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "./src/config/types";
import { MessageStatus, MessageDirection } from "./src/config/enums";

// Import styles (if using CSS import)
import "chatme/styles";

const ExampleApp = () => {
  // Sample data
  const [contacts] = useState<Contact[]>([
    {
      id: "contact-1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "+1234567890",
      avatarUrl: "https://example.com/avatar.jpg",
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "contact-2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phoneNumber: "+0987654321",
      avatarUrl: "https://example.com/avatar2.jpg",
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "conv-1",
      contactId: "contact-1",
      lastMessage: "Hello there!",
      lastMessageAt: new Date(),
      lastMessageId: "msg-1",
      unreadCount: 2,
      lastMessageStatus: MessageStatus.DELIVERED,
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: "conv-2",
      contactId: "contact-2",
      lastMessage: "How are you doing?",
      lastMessageAt: new Date(Date.now() - 3600000), // 1 hour ago
      lastMessageId: "msg-2",
      unreadCount: 0,
      lastMessageStatus: MessageStatus.READ,
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      content: "Hello there!",
      senderId: "contact-1",
      receiverId: "user-1",
      direction: MessageDirection.INBOUND,
      currentStatus: MessageStatus.DELIVERED,
      statusHistory: [
        { status: MessageStatus.PENDING, at: new Date(Date.now() - 10000) },
        { status: MessageStatus.SENT, at: new Date(Date.now() - 8000) },
        { status: MessageStatus.DELIVERED, at: new Date(Date.now() - 5000) },
      ],
      isActive: true,
      createdAt: new Date(Date.now() - 10000),
    },
    {
      id: "msg-2",
      contactId: "contact-2",
      conversationId: "conv-2",
      content: "How are you doing?",
      senderId: "contact-2",
      receiverId: "user-1",
      direction: MessageDirection.INBOUND,
      currentStatus: MessageStatus.READ,
      statusHistory: [
        { status: MessageStatus.PENDING, at: new Date(Date.now() - 3700000) },
        { status: MessageStatus.SENT, at: new Date(Date.now() - 3650000) },
        { status: MessageStatus.DELIVERED, at: new Date(Date.now() - 3620000) },
        { status: MessageStatus.READ, at: new Date(Date.now() - 3600000) },
      ],
      isActive: true,
      createdAt: new Date(Date.now() - 3700000),
    },
  ]);

  // Event handlers
  const handleInit = () => {
    console.log("ChatMe initialized");
  };

  const handleCreateNewConversation = (
    contact: Contact,
    conversation: Conversation
  ) => {
    console.log("Creating new conversation", { contact, conversation });
    setConversations((prev) => [...prev, conversation]);
  };

  const handleConversationSelect = (conversation: Conversation) => {
    console.log("Conversation selected", conversation);
  };

  const handleContactInfo = (contact: Contact) => {
    console.log("Contact info requested", contact);
  };

  const handleDeleteConversation = (conversation: Conversation) => {
    console.log("Deleting conversation", conversation);
    setConversations((prev) =>
      prev.filter((conv) => conv.id !== conversation.id)
    );
  };

  const handleMessageSent = (message: NewMessage, conversationId: string) => {
    console.log("Message sent", { message, conversationId });

    // Add the new message to the messages array
    const newMessage: Message = {
      ...message,
      id: `msg-${Date.now()}`,
      senderId: message.senderId || "user-1",
      receiverId: message.receiverId || "contact-1",
      createdAt: new Date(),
      currentStatus: MessageStatus.SENT,
      statusHistory: [
        { status: MessageStatus.PENDING, at: new Date() },
        { status: MessageStatus.SENT, at: new Date() },
      ],
    };

    setMessages((prev) => [...prev, newMessage]);

    // Update the conversation's last message
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              lastMessage: message.content,
              lastMessageAt: new Date(),
              lastMessageId: newMessage.id!,
              unreadCount: 0,
            }
          : conv
      )
    );
  };

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={handleInit}
        onCreateNewConversation={handleCreateNewConversation}
        onConversationSelect={handleConversationSelect}
        onContactInfo={handleContactInfo}
        onDeleteConversation={handleDeleteConversation}
        onMessageSent={handleMessageSent}
      />
    </div>
  );
};

export default ExampleApp;
