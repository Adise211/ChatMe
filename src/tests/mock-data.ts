import { MessageDirection, MessageStatus } from "@/config/enums";

// Mock Contacts Data
export const mockContacts = [
  {
    id: "contact-1",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phoneNumber: "+1234567890",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "Regular customer, prefers morning calls",
    createdAt: new Date("2024-01-15T10:30:00Z"),
    updatedAt: new Date("2024-01-20T14:22:00Z"),
  },
  {
    id: "contact-2",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phoneNumber: "+1987654321",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "VIP customer, interested in premium services",
    createdAt: new Date("2024-01-10T09:15:00Z"),
    updatedAt: new Date("2024-01-25T16:45:00Z"),
  },
  {
    id: "contact-3",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@email.com",
    phoneNumber: "+1555123456",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "New customer, needs onboarding assistance",
    createdAt: new Date("2024-01-28T11:20:00Z"),
    updatedAt: new Date("2024-01-28T11:20:00Z"),
  },
  {
    id: "contact-4",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@email.com",
    phoneNumber: "+1444333222",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "Technical support inquiries",
    createdAt: new Date("2024-01-05T08:45:00Z"),
    updatedAt: new Date("2024-01-22T13:30:00Z"),
  },
  {
    id: "contact-5",
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@email.com",
    phoneNumber: "+1777888999",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    isActive: false,
    notes: "Inactive customer, last contact 6 months ago",
    createdAt: new Date("2023-08-15T14:10:00Z"),
    updatedAt: new Date("2023-12-01T10:15:00Z"),
  },
  {
    id: "contact-6",
    firstName: "Lisa",
    lastName: "Anderson",
    email: "lisa.anderson@email.com",
    phoneNumber: "+1666555444",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    isActive: true,
    notes: "Billing inquiries, prefers email communication",
    createdAt: new Date("2024-01-12T16:30:00Z"),
    updatedAt: new Date("2024-01-26T09:45:00Z"),
  },
];

// Mock Conversations Data
export const mockConversations = [
  {
    id: "conv-1",
    contactId: "contact-1",
    lastMessage: "Thanks for the quick response! I'll get back to you soon.",
    lastMessageAt: new Date("2024-01-26T15:30:00Z"),
    lastMessageId: "msg-8",
    unreadCount: 0,
    lastMessageStatus: MessageStatus.READ,
    isActive: true,
    createdAt: new Date("2024-01-15T10:30:00Z"),
    updatedAt: new Date("2024-01-26T15:30:00Z"),
  },
  {
    id: "conv-2",
    contactId: "contact-2",
    lastMessage: "Perfect! I'm excited to try the premium features.",
    lastMessageAt: new Date("2024-01-25T16:45:00Z"),
    lastMessageId: "msg-12",
    unreadCount: 1,
    lastMessageStatus: MessageStatus.DELIVERED,
    isActive: true,
    createdAt: new Date("2024-01-10T09:15:00Z"),
    updatedAt: new Date("2024-01-25T16:45:00Z"),
  },
  {
    id: "conv-3",
    contactId: "contact-3",
    lastMessage: "I'm having trouble setting up my account. Can you help?",
    lastMessageAt: new Date("2024-01-28T11:20:00Z"),
    lastMessageId: "msg-15",
    unreadCount: 2,
    lastMessageStatus: MessageStatus.SENT,
    isActive: true,
    createdAt: new Date("2024-01-28T11:20:00Z"),
    updatedAt: new Date("2024-01-28T11:20:00Z"),
  },
  {
    id: "conv-4",
    contactId: "contact-4",
    lastMessage: "The issue has been resolved. Thank you for your patience!",
    lastMessageAt: new Date("2024-01-22T13:30:00Z"),
    lastMessageId: "msg-11",
    unreadCount: 0,
    lastMessageStatus: MessageStatus.READ,
    isActive: true,
    createdAt: new Date("2024-01-05T08:45:00Z"),
    updatedAt: new Date("2024-01-22T13:30:00Z"),
  },
  {
    id: "conv-5",
    contactId: "contact-5",
    lastMessage: "I'll be in touch when I'm ready to continue.",
    lastMessageAt: new Date("2023-12-01T10:15:00Z"),
    lastMessageId: "msg-5",
    unreadCount: 0,
    lastMessageStatus: MessageStatus.READ,
    isActive: false,
    createdAt: new Date("2023-08-15T14:10:00Z"),
    updatedAt: new Date("2023-12-01T10:15:00Z"),
  },
  {
    id: "conv-6",
    contactId: "contact-6",
    lastMessage: "I've updated my payment method. Please confirm.",
    lastMessageAt: new Date("2024-01-26T09:45:00Z"),
    lastMessageId: "msg-14",
    unreadCount: 0,
    lastMessageStatus: MessageStatus.READ,
    isActive: true,
    createdAt: new Date("2024-01-12T16:30:00Z"),
    updatedAt: new Date("2024-01-26T09:45:00Z"),
  },
];

// Mock Messages Data
export const mockMessages = [
  // Conversation 1 (John Smith)
  {
    id: "msg-1",
    contactId: "contact-1",
    conversationId: "conv-1",
    content: "Hello! I'm interested in your services. Can you tell me more?",
    senderId: "contact-1",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-15T10:30:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-15T10:30:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-15T10:30:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-15T10:35:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-15T10:30:00Z"),
    updatedAt: new Date("2024-01-15T10:35:00Z"),
  },
  {
    id: "msg-2",
    contactId: "contact-1",
    conversationId: "conv-1",
    content:
      "Hi John! I'd be happy to help you learn more about our services. What specific area are you most interested in?",
    senderId: "agent-1",
    receiverId: "contact-1",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-15T10:35:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-15T10:35:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-15T10:35:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-15T10:40:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-15T10:35:00Z"),
    updatedAt: new Date("2024-01-15T10:40:00Z"),
  },
  {
    id: "msg-3",
    contactId: "contact-1",
    conversationId: "conv-1",
    content:
      "I'm particularly interested in your premium package. What does it include?",
    senderId: "contact-1",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-15T10:40:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-15T10:40:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-15T10:40:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-15T10:45:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-15T10:40:00Z"),
    updatedAt: new Date("2024-01-15T10:45:00Z"),
  },
  {
    id: "msg-4",
    contactId: "contact-1",
    conversationId: "conv-1",
    content:
      "Our premium package includes 24/7 support, advanced analytics, and priority processing. I can send you a detailed brochure if you'd like.",
    senderId: "agent-1",
    receiverId: "contact-1",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-15T10:45:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-15T10:45:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-15T10:45:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-15T10:50:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-15T10:45:00Z"),
    updatedAt: new Date("2024-01-15T10:50:00Z"),
  },
  {
    id: "msg-5",
    contactId: "contact-1",
    conversationId: "conv-1",
    content:
      "Yes, please send me the brochure. I'll review it and get back to you.",
    senderId: "contact-1",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-15T10:50:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-15T10:50:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-15T10:50:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-15T10:55:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-15T10:50:00Z"),
    updatedAt: new Date("2024-01-15T10:55:00Z"),
  },
  {
    id: "msg-6",
    contactId: "contact-1",
    conversationId: "conv-1",
    content:
      "Perfect! I've sent the brochure to your email. Feel free to reach out if you have any questions.",
    senderId: "agent-1",
    receiverId: "contact-1",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-15T10:55:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-15T10:55:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-15T10:55:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-15T11:00:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-15T10:55:00Z"),
    updatedAt: new Date("2024-01-15T11:00:00Z"),
  },
  {
    id: "msg-7",
    contactId: "contact-1",
    conversationId: "conv-1",
    content:
      "I've reviewed the brochure and I'm very interested. What's the next step?",
    senderId: "contact-1",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-20T14:20:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-20T14:20:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-20T14:20:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-20T14:25:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-20T14:20:00Z"),
    updatedAt: new Date("2024-01-20T14:25:00Z"),
  },
  {
    id: "msg-8",
    contactId: "contact-1",
    conversationId: "conv-1",
    content: "Thanks for the quick response! I'll get back to you soon.",
    senderId: "contact-1",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-26T15:30:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-26T15:30:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-26T15:30:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-26T15:35:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-26T15:30:00Z"),
    updatedAt: new Date("2024-01-26T15:35:00Z"),
  },

  // Conversation 2 (Sarah Johnson)
  {
    id: "msg-9",
    contactId: "contact-2",
    conversationId: "conv-2",
    content:
      "Hi! I'm a VIP customer and I'd like to upgrade to your premium services.",
    senderId: "contact-2",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-10T09:15:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-10T09:15:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-10T09:15:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-10T09:20:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-10T09:15:00Z"),
    updatedAt: new Date("2024-01-10T09:20:00Z"),
  },
  {
    id: "msg-10",
    contactId: "contact-2",
    conversationId: "conv-2",
    content:
      "Hello Sarah! I'd be delighted to help you upgrade. As a VIP customer, you'll get special pricing. Let me check your current plan and send you the upgrade options.",
    senderId: "agent-1",
    receiverId: "contact-2",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-10T09:20:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-10T09:20:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-10T09:20:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-10T09:25:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-10T09:20:00Z"),
    updatedAt: new Date("2024-01-10T09:25:00Z"),
  },
  {
    id: "msg-11",
    contactId: "contact-2",
    conversationId: "conv-2",
    content: "Perfect! I'm excited to try the premium features.",
    senderId: "contact-2",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.DELIVERED,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-25T16:45:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-25T16:45:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-25T16:45:10Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-25T16:45:00Z"),
    updatedAt: new Date("2024-01-25T16:45:10Z"),
  },

  // Conversation 3 (Michael Brown)
  {
    id: "msg-12",
    contactId: "contact-3",
    conversationId: "conv-3",
    content:
      "Hello! I just signed up and I'm having trouble setting up my account. Can you help?",
    senderId: "contact-3",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.SENT,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-28T11:20:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-28T11:20:05Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-28T11:20:00Z"),
    updatedAt: new Date("2024-01-28T11:20:05Z"),
  },
  {
    id: "msg-13",
    contactId: "contact-3",
    conversationId: "conv-3",
    content: "I'm having trouble setting up my account. Can you help?",
    senderId: "contact-3",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.SENT,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-28T11:25:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-28T11:25:05Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-28T11:25:00Z"),
    updatedAt: new Date("2024-01-28T11:25:05Z"),
  },

  // Conversation 4 (Emily Davis)
  {
    id: "msg-14",
    contactId: "contact-4",
    conversationId: "conv-4",
    content:
      "I'm experiencing technical issues with the platform. The dashboard is not loading properly.",
    senderId: "contact-4",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-05T08:45:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-05T08:45:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-05T08:45:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-05T08:50:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-05T08:45:00Z"),
    updatedAt: new Date("2024-01-05T08:50:00Z"),
  },
  {
    id: "msg-15",
    contactId: "contact-4",
    conversationId: "conv-4",
    content: "The issue has been resolved. Thank you for your patience!",
    senderId: "agent-1",
    receiverId: "contact-4",
    direction: MessageDirection.OUTBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-22T13:30:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-22T13:30:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-22T13:30:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-22T13:35:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-22T13:30:00Z"),
    updatedAt: new Date("2024-01-22T13:35:00Z"),
  },

  // Conversation 5 (David Wilson - Inactive)
  {
    id: "msg-16",
    contactId: "contact-5",
    conversationId: "conv-5",
    content: "I'll be in touch when I'm ready to continue.",
    senderId: "contact-5",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2023-12-01T10:15:00Z") },
      { status: MessageStatus.SENT, at: new Date("2023-12-01T10:15:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2023-12-01T10:15:10Z") },
      { status: MessageStatus.READ, at: new Date("2023-12-01T10:20:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2023-12-01T10:15:00Z"),
    updatedAt: new Date("2023-12-01T10:20:00Z"),
  },

  // Conversation 6 (Lisa Anderson)
  {
    id: "msg-17",
    contactId: "contact-6",
    conversationId: "conv-6",
    content: "I've updated my payment method. Please confirm.",
    senderId: "contact-6",
    receiverId: "agent-1",
    direction: MessageDirection.INBOUND,
    currentStatus: MessageStatus.READ,
    statusHistory: [
      { status: MessageStatus.PENDING, at: new Date("2024-01-26T09:45:00Z") },
      { status: MessageStatus.SENT, at: new Date("2024-01-26T09:45:05Z") },
      { status: MessageStatus.DELIVERED, at: new Date("2024-01-26T09:45:10Z") },
      { status: MessageStatus.READ, at: new Date("2024-01-26T09:50:00Z") },
    ],
    isActive: true,
    createdAt: new Date("2024-01-26T09:45:00Z"),
    updatedAt: new Date("2024-01-26T09:50:00Z"),
  },
];

// Helper function to get messages by conversation ID
export const getMessagesByConversationId = (conversationId: string) => {
  return mockMessages.filter(
    (message) => message.conversationId === conversationId
  );
};

// Helper function to get conversation by contact ID
export const getConversationByContactId = (contactId: string) => {
  return mockConversations.find(
    (conversation) => conversation.contactId === contactId
  );
};

// Helper function to get contact by ID
export const getContactById = (contactId: string) => {
  return mockContacts.find((contact) => contact.id === contactId);
};

// Helper function to get all data for a conversation (contact + conversation + messages)
export const getConversationData = (conversationId: string) => {
  const conversation = mockConversations.find(
    (conv) => conv.id === conversationId
  );
  if (!conversation) return null;

  const contact = getContactById(conversation.contactId);
  const messages = getMessagesByConversationId(conversationId);

  return {
    contact,
    conversation,
    messages,
  };
};

// Export types for TypeScript
export type MockContact = (typeof mockContacts)[0];
export type MockConversation = (typeof mockConversations)[0];
export type MockMessage = (typeof mockMessages)[0];
