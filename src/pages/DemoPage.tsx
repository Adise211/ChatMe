import { useState } from "react";
import ChatMe from "@/components/ChatMe";
import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "@/config/types";
import { MessageDirection, MessageStatus } from "@/config/enums";

// Demo data with more realistic examples
const demoContacts: Contact[] = [
  {
    id: "demo-contact-1",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "+1234567890",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "VIP customer, prefers morning calls",
    createdAt: new Date("2024-01-15T10:30:00Z"),
    updatedAt: new Date("2024-01-20T14:22:00Z"),
  },
  {
    id: "demo-contact-2",
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    phoneNumber: "+1987654321",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "Regular customer, interested in premium services",
    createdAt: new Date("2024-01-10T09:15:00Z"),
    updatedAt: new Date("2024-01-25T16:45:00Z"),
  },
  {
    id: "demo-contact-3",
    firstName: "Carol",
    lastName: "Davis",
    email: "carol.davis@example.com",
    phoneNumber: "+1555123456",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "New customer, needs onboarding assistance",
    createdAt: new Date("2024-01-28T11:20:00Z"),
    updatedAt: new Date("2024-01-28T11:20:00Z"),
  },
];

const demoConversations: Conversation[] = [
  {
    id: "demo-conv-1",
    contactId: "demo-contact-1",
    lastMessage:
      "Hey! How are you doing? I wanted to follow up on our conversation from yesterday.",
    lastMessageAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    lastMessageId: "demo-msg-3",
    unreadCount: 2,
    lastMessageStatus: MessageStatus.DELIVERED,
    lastMessageDirection: MessageDirection.INBOUND,
    isActive: true,
    createdAt: new Date("2024-01-15T10:30:00Z"),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "demo-conv-2",
    contactId: "demo-contact-2",
    lastMessage: "Thanks for the quick response! I'll get back to you soon.",
    lastMessageAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    lastMessageId: "demo-msg-6",
    unreadCount: 0,
    lastMessageStatus: MessageStatus.READ,
    lastMessageDirection: MessageDirection.OUTBOUND,
    isActive: true,
    createdAt: new Date("2024-01-10T09:15:00Z"),
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "demo-conv-3",
    contactId: "demo-contact-3",
    lastMessage: "Perfect! I'll send you the details shortly.",
    lastMessageAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    lastMessageId: "demo-msg-9",
    unreadCount: 1,
    lastMessageStatus: MessageStatus.SENT,
    lastMessageDirection: MessageDirection.OUTBOUND,
    isActive: true,
    createdAt: new Date("2024-01-28T11:20:00Z"),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const demoMessages: Message[] = [
  // Conversation 1 messages
  {
    id: "demo-msg-1",
    contactId: "demo-contact-1",
    conversationId: "demo-conv-1",
    content:
      "Hi Alice! I hope you're doing well. I wanted to discuss the project we talked about.",
    senderId: "demo-user-1",
    receiverId: "demo-contact-1",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 4 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 4 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 4 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: "demo-msg-2",
    contactId: "demo-contact-1",
    conversationId: "demo-conv-1",
    content:
      "Hello! Yes, I'm doing great, thank you for asking. I'm excited to hear more about the project details.",
    senderId: "demo-contact-1",
    receiverId: "demo-user-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 3 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 3 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: "demo-msg-3",
    contactId: "demo-contact-1",
    conversationId: "demo-conv-1",
    content:
      "Hey! How are you doing? I wanted to follow up on our conversation from yesterday.",
    senderId: "demo-contact-1",
    receiverId: "demo-user-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.DELIVERED,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 2 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 2 * 60 * 60 * 1000 + 2000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  // Conversation 2 messages
  {
    id: "demo-msg-4",
    contactId: "demo-contact-2",
    conversationId: "demo-conv-2",
    content:
      "Hi Bob! I have some great news about your order. It's been processed and will ship tomorrow.",
    senderId: "demo-user-1",
    receiverId: "demo-contact-2",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 6 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 6 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 6 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 5.5 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: "demo-msg-5",
    contactId: "demo-contact-2",
    conversationId: "demo-conv-2",
    content:
      "That's fantastic! Thank you so much for the update. I really appreciate the quick processing.",
    senderId: "demo-contact-2",
    receiverId: "demo-user-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 5.5 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 5.5 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 5.5 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 5 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 5.5 * 60 * 60 * 1000),
  },
  {
    id: "demo-msg-6",
    contactId: "demo-contact-2",
    conversationId: "demo-conv-2",
    content: "Thanks for the quick response! I'll get back to you soon.",
    senderId: "demo-user-1",
    receiverId: "demo-contact-2",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 5 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 5 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 5 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 4.5 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  // Conversation 3 messages
  {
    id: "demo-msg-7",
    contactId: "demo-contact-3",
    conversationId: "demo-conv-3",
    content:
      "Welcome to our service, Carol! I'm here to help you get started. Do you have any questions?",
    senderId: "demo-user-1",
    receiverId: "demo-contact-3",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 25 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 25 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 25 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 24.5 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 25 * 60 * 60 * 1000),
  },
  {
    id: "demo-msg-8",
    contactId: "demo-contact-3",
    conversationId: "demo-conv-3",
    content:
      "Thank you! I'm excited to get started. Could you please send me the onboarding guide?",
    senderId: "demo-contact-3",
    receiverId: "demo-user-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 24.5 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 24.5 * 60 * 60 * 1000 + 1000),
      },
      {
        status: MessageStatus.DELIVERED,
        at: new Date(Date.now() - 24.5 * 60 * 60 * 1000 + 2000),
      },
      {
        status: MessageStatus.READ,
        at: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 24.5 * 60 * 60 * 1000),
  },
  {
    id: "demo-msg-9",
    contactId: "demo-contact-3",
    conversationId: "demo-conv-3",
    content: "Perfect! I'll send you the details shortly.",
    senderId: "demo-user-1",
    receiverId: "demo-contact-3",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.SENT,
    statusHistory: [
      {
        status: MessageStatus.PENDING,
        at: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        status: MessageStatus.SENT,
        at: new Date(Date.now() - 24 * 60 * 60 * 1000 + 1000),
      },
    ],
    isActive: true,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const DemoPage = () => {
  const [contacts] = useState<Contact[]>(demoContacts);
  const [conversations, setConversations] =
    useState<Conversation[]>(demoConversations);
  const [messages, setMessages] = useState<Message[]>(demoMessages);

  const handleInit = () => {
    console.log("🚀 ChatMe Demo initialized");
  };

  const handleCreateNewConversation = (
    contact: Contact,
    conversation: Conversation
  ) => {
    console.log("💬 Creating new conversation:", { contact, conversation });

    // Add new conversation to the list
    const newConversation: Conversation = {
      ...conversation,
      id: `conv-${Date.now()}`,
      createdAt: new Date(),
    };

    setConversations((prev) => [newConversation, ...prev]);
  };

  const handleConversationSelect = (conversation: Conversation) => {
    console.log("📱 Conversation selected:", conversation);
  };

  const handleContactInfo = (contact: Contact) => {
    console.log("👤 Contact info requested:", contact);
    alert(
      `Contact Info:\nName: ${contact.firstName} ${contact.lastName}\nEmail: ${
        contact.email
      }\nPhone: ${contact.phoneNumber}\nNotes: ${contact.notes || "No notes"}`
    );
  };

  const handleDeleteConversation = (conversation: Conversation) => {
    console.log("🗑️ Deleting conversation:", conversation);

    // Remove conversation and its messages
    setConversations((prev) =>
      prev.filter((conv) => conv.id !== conversation.id)
    );
    setMessages((prev) =>
      prev.filter((msg) => msg.conversationId !== conversation.id)
    );
  };

  const handleMessageSent = (
    newMessage: NewMessage,
    conversationId: string
  ) => {
    console.log("📤 Message sent:", { newMessage, conversationId });

    // Add the new message to the messages array
    const message: Message = {
      ...newMessage,
      id: `msg-${Date.now()}`,
      senderId: newMessage.senderId || "demo-user-1", // Provide default senderId
      createdAt: new Date(),
      statusHistory: [{ status: MessageStatus.PENDING, at: new Date() }],
    };

    setMessages((prev) => [...prev, message]);

    // Update the conversation's last message
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              lastMessage: newMessage.content,
              lastMessageAt: new Date(),
              lastMessageId: message.id!,
              unreadCount: 0,
              lastMessageDirection: MessageDirection.OUTBOUND,
              lastMessageStatus: MessageStatus.PENDING,
              updatedAt: new Date(),
            }
          : conv
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-full">
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
    </div>
  );
};

export default DemoPage;
