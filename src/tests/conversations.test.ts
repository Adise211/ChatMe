import { describe, it, expect, beforeEach, vi } from "vitest";
import { useStore } from "@/store";
import { mockConversations, mockMessages } from "./mock-data";
import {
  deleteConversation,
  sendMessage,
  createNewConversation,
} from "./mock-functions";
import type {
  Conversation,
  NewMessage,
  Contact,
  Message,
} from "@/config/types";
import { MessageStatus, MessageDirection } from "@/config/enums";

describe("delete conversation", () => {
  beforeEach(() => {
    // Reset the store before each test
    useStore.getState().resetAll();
    // Initialize with mock conversations
    useStore.getState().setConversations(mockConversations);
  });

  it("should delete a conversation from the store", () => {
    // Get initial state
    const initialConversations = useStore.getState().conversations;
    expect(initialConversations).toHaveLength(6);

    // Select a conversation to delete (first one from mock data)
    const conversationToDelete = mockConversations[0];
    expect(conversationToDelete.id).toBe("conv-1");

    // Delete the conversation
    deleteConversation(conversationToDelete);

    // Verify the conversation was removed
    const updatedConversations = useStore.getState().conversations;
    expect(updatedConversations).toHaveLength(5);
    expect(updatedConversations.find((c) => c.id === "conv-1")).toBeUndefined();
  });

  it("should not affect other conversations when deleting one", () => {
    const conversationToDelete = mockConversations[1]; // conv-2

    // Delete the conversation
    deleteConversation(conversationToDelete);

    // Verify other conversations remain
    const updatedConversations = useStore.getState().conversations;
    expect(updatedConversations).toHaveLength(5);

    // Check that other conversations are still present
    expect(updatedConversations.find((c) => c.id === "conv-1")).toBeDefined();
    expect(updatedConversations.find((c) => c.id === "conv-3")).toBeDefined();
    expect(updatedConversations.find((c) => c.id === "conv-4")).toBeDefined();
    expect(updatedConversations.find((c) => c.id === "conv-5")).toBeDefined();
    expect(updatedConversations.find((c) => c.id === "conv-6")).toBeDefined();

    // Verify the deleted conversation is not present
    expect(updatedConversations.find((c) => c.id === "conv-2")).toBeUndefined();
  });

  it("should handle deleting a non-existent conversation gracefully", () => {
    // Get initial state
    const initialConversations = useStore.getState().conversations;
    expect(initialConversations).toHaveLength(6);

    // Create a conversation that doesn't exist in the store
    const nonExistentConversation: Conversation = {
      id: "non-existent",
      contactId: "contact-1",
      lastMessage: "Test message",
      lastMessageAt: new Date(),
      lastMessageId: "msg-test",
      unreadCount: 0,
      lastMessageStatus: MessageStatus.READ,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Delete the non-existent conversation
    deleteConversation(nonExistentConversation);

    // Verify no conversations were affected
    const updatedConversations = useStore.getState().conversations;
    expect(updatedConversations).toHaveLength(6);
    expect(updatedConversations).toEqual(initialConversations);
  });

  it("should delete the correct conversation by ID", () => {
    const targetConversation = mockConversations.find((c) => c.id === "conv-3");
    expect(targetConversation).toBeDefined();

    // Delete the specific conversation
    deleteConversation(targetConversation!);

    // Verify the correct conversation was deleted
    const updatedConversations = useStore.getState().conversations;
    expect(updatedConversations).toHaveLength(5);

    // Verify the deleted conversation was the one with contactId "contact-3"
    const deletedConversation = updatedConversations.find(
      (c) => c.contactId === "contact-3"
    );
    expect(deletedConversation).toBeUndefined();

    // Verify other conversations with different contactIds remain
    expect(
      updatedConversations.find((c) => c.contactId === "contact-1")
    ).toBeDefined();
    expect(
      updatedConversations.find((c) => c.contactId === "contact-2")
    ).toBeDefined();
  });

  it("should maintain conversation order after deletion", () => {
    // Delete the second conversation
    const conversationToDelete = mockConversations[1];
    deleteConversation(conversationToDelete);

    // Verify the remaining conversations maintain their relative order
    const updatedConversations = useStore.getState().conversations;
    const updatedOrder = updatedConversations.map((c) => c.id);

    // The order should be the same except for the deleted conversation
    expect(updatedOrder).toEqual([
      "conv-1",
      "conv-3",
      "conv-4",
      "conv-5",
      "conv-6",
    ]);
  });
});

describe("send message", () => {
  beforeEach(() => {
    // Reset the store before each test
    useStore.getState().resetAll();
    // Initialize with mock messages
    useStore.getState().setMessages(mockMessages);
  });

  it("should add a new outbound message to the store", () => {
    const initialMessages = useStore.getState().messages;
    expect(initialMessages).toHaveLength(mockMessages.length);

    const newMessage: NewMessage = {
      content: "Hello, this is a test message",
      direction: MessageDirection.OUTBOUND,
      senderId: "user-1",
      receiverId: "contact-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.PENDING,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    const conversationId = "conv-1";
    sendMessage(newMessage, conversationId);

    const updatedMessages = useStore.getState().messages;
    expect(updatedMessages).toHaveLength(mockMessages.length + 1);

    const addedMessage = updatedMessages.find(
      (msg) =>
        msg.conversationId === conversationId &&
        msg.content === newMessage.content
    );
    expect(addedMessage).toBeDefined();
    expect(addedMessage?.direction).toBe(MessageDirection.OUTBOUND);
    expect(addedMessage?.senderId).toBe("user-1");
    expect(addedMessage?.currentStatus).toBe(MessageStatus.PENDING);
  });

  it("should add a new inbound message to the store", () => {
    const initialMessages = useStore.getState().messages;
    expect(initialMessages).toHaveLength(mockMessages.length);

    const newMessage: NewMessage = {
      content: "This is an inbound message",
      direction: MessageDirection.INBOUND,
      senderId: "contact-1",
      receiverId: "user-1",
      contactId: "contact-1",
      conversationId: "conv-2",
      currentStatus: MessageStatus.DELIVERED,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    const conversationId = "conv-2";
    sendMessage(newMessage, conversationId);

    const updatedMessages = useStore.getState().messages;
    expect(updatedMessages).toHaveLength(mockMessages.length + 1);

    const addedMessage = updatedMessages.find(
      (msg) =>
        msg.conversationId === conversationId &&
        msg.content === newMessage.content
    );
    expect(addedMessage).toBeDefined();
    expect(addedMessage?.direction).toBe(MessageDirection.INBOUND);
    expect(addedMessage?.senderId).toBe("contact-1");
    expect(addedMessage?.currentStatus).toBe(MessageStatus.DELIVERED);
  });

  it("should generate unique message IDs for each message", () => {
    const newMessage1: NewMessage = {
      content: "First message",
      direction: MessageDirection.OUTBOUND,
      senderId: "user-1",
      receiverId: "contact-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.PENDING,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    const newMessage2: NewMessage = {
      content: "Second message",
      direction: MessageDirection.OUTBOUND,
      senderId: "user-1",
      receiverId: "contact-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.PENDING,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    sendMessage(newMessage1, "conv-1");
    sendMessage(newMessage2, "conv-1");

    const updatedMessages = useStore.getState().messages;
    const addedMessages = updatedMessages.filter(
      (msg) =>
        msg.content === "First message" || msg.content === "Second message"
    );

    expect(addedMessages).toHaveLength(2);
    expect((addedMessages[0] as Message).id).not.toBe(
      (addedMessages[1] as Message).id
    );
  });

  it("should update message status for outbound messages after delay", async () => {
    vi.useFakeTimers();

    const newMessage: NewMessage = {
      content: "Test outbound message",
      direction: MessageDirection.OUTBOUND,
      senderId: "user-1",
      receiverId: "contact-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.PENDING,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    sendMessage(newMessage, "conv-1");

    // Check initial status
    let updatedMessages = useStore.getState().messages;
    const addedMessage = updatedMessages.find(
      (msg) => msg.content === newMessage.content
    );
    expect(addedMessage?.currentStatus).toBe(MessageStatus.PENDING);

    // Fast-forward time
    vi.advanceTimersByTime(1000);

    // Check updated status
    updatedMessages = useStore.getState().messages;
    const updatedMessage = updatedMessages.find(
      (msg) => msg.content === newMessage.content
    );
    expect(updatedMessage?.currentStatus).toBe(MessageStatus.SENT);

    vi.useRealTimers();
  });

  it("should update message status for inbound messages after delay", async () => {
    vi.useFakeTimers();

    const newMessage: NewMessage = {
      content: "Test inbound message",
      direction: MessageDirection.INBOUND,
      senderId: "contact-1",
      receiverId: "user-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.DELIVERED,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    sendMessage(newMessage, "conv-1");

    // Check initial status
    let updatedMessages = useStore.getState().messages;
    const addedMessage = updatedMessages.find(
      (msg) => msg.content === newMessage.content
    );
    expect(addedMessage?.currentStatus).toBe(MessageStatus.DELIVERED);

    // Fast-forward time
    vi.advanceTimersByTime(1000);

    // Check updated status (should remain DELIVERED for inbound)
    updatedMessages = useStore.getState().messages;
    const updatedMessage = updatedMessages.find(
      (msg) => msg.content === newMessage.content
    );
    expect(updatedMessage?.currentStatus).toBe(MessageStatus.DELIVERED);

    vi.useRealTimers();
  });

  it("should handle multiple messages in the same conversation", () => {
    const conversationId = "conv-1";
    const messages = [
      {
        content: "First message",
        direction: MessageDirection.OUTBOUND,
        senderId: "user-1",
        receiverId: "contact-1",
        contactId: "contact-1",
        conversationId: "conv-1",
        currentStatus: MessageStatus.PENDING,
        statusHistory: [],
        isActive: true,
        createdAt: new Date(),
      },
      {
        content: "Second message",
        direction: MessageDirection.INBOUND,
        senderId: "contact-1",
        receiverId: "user-1",
        contactId: "contact-1",
        conversationId: "conv-1",
        currentStatus: MessageStatus.DELIVERED,
        statusHistory: [],
        isActive: true,
        createdAt: new Date(),
      },
      {
        content: "Third message",
        direction: MessageDirection.OUTBOUND,
        senderId: "user-1",
        receiverId: "contact-1",
        contactId: "contact-1",
        conversationId: "conv-1",
        currentStatus: MessageStatus.PENDING,
        statusHistory: [],
        isActive: true,
        createdAt: new Date(),
      },
    ];

    messages.forEach((message) => {
      sendMessage(message, conversationId);
    });

    const updatedMessages = useStore.getState().messages;
    const conversationMessages = updatedMessages.filter(
      (msg) => msg.conversationId === conversationId
    );

    expect(conversationMessages.length).toBeGreaterThanOrEqual(3);
  });

  it("should handle messages with different conversation IDs", () => {
    const conversations = ["conv-1", "conv-2", "conv-3"];
    const initialCount = useStore.getState().messages.length;

    conversations.forEach((conversationId) => {
      const newMessage: NewMessage = {
        content: `Message for ${conversationId}`,
        direction: MessageDirection.OUTBOUND,
        senderId: "user-1",
        receiverId: "contact-1",
        contactId: "contact-1",
        conversationId: conversationId,
        currentStatus: MessageStatus.PENDING,
        statusHistory: [],
        isActive: true,
        createdAt: new Date(),
      };

      sendMessage(newMessage, conversationId);
    });

    const updatedMessages = useStore.getState().messages;
    expect(updatedMessages).toHaveLength(initialCount + 3);

    conversations.forEach((conversationId) => {
      const message = updatedMessages.find(
        (msg) =>
          msg.conversationId === conversationId &&
          msg.content === `Message for ${conversationId}`
      );
      expect(message).toBeDefined();
    });
  });

  it("should handle empty message content", () => {
    const newMessage: NewMessage = {
      content: "",
      direction: MessageDirection.OUTBOUND,
      senderId: "user-1",
      receiverId: "contact-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.PENDING,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    const initialCount = useStore.getState().messages.length;
    sendMessage(newMessage, "conv-1");

    const updatedMessages = useStore.getState().messages;
    expect(updatedMessages).toHaveLength(initialCount + 1);

    const addedMessage = updatedMessages.find(
      (msg) => msg.content === "" && msg.conversationId === "conv-1"
    );
    expect(addedMessage).toBeDefined();
  });

  it("should handle messages with special characters", () => {
    const specialContent = "Hello! @#$%^&*()_+{}|:<>?[]\\;'\",./";
    const newMessage: NewMessage = {
      content: specialContent,
      direction: MessageDirection.OUTBOUND,
      senderId: "user-1",
      receiverId: "contact-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      currentStatus: MessageStatus.PENDING,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    };

    sendMessage(newMessage, "conv-1");

    const updatedMessages = useStore.getState().messages;
    const addedMessage = updatedMessages.find(
      (msg) => msg.content === specialContent
    );
    expect(addedMessage).toBeDefined();
    expect(addedMessage?.content).toBe(specialContent);
  });
});

describe("create new conversation", () => {
  beforeEach(() => {
    // Reset the store before each test
    useStore.getState().resetAll();
  });

  it("should create a new conversation and contact", () => {
    const initialContacts = useStore.getState().contacts;
    const initialConversations = useStore.getState().conversations;

    const newContact: Contact = {
      id: "", // Will be generated
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phoneNumber: "+1234567890",
      avatarUrl: "https://example.com/avatar.jpg",
      isActive: true,
      notes: "Test contact",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newConversation: Conversation = {
      id: "", // Will be generated
      contactId: "", // Will be set to contact ID
      lastMessage: "Hello",
      lastMessageAt: new Date(),
      lastMessageId: "msg-1",
      unreadCount: 0,
      lastMessageStatus: MessageStatus.READ,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    createNewConversation(newContact, newConversation);

    const updatedContacts = useStore.getState().contacts;
    const updatedConversations = useStore.getState().conversations;

    expect(updatedContacts).toHaveLength(initialContacts.length + 1);
    expect(updatedConversations).toHaveLength(initialConversations.length + 1);

    // Check that contact ID was generated
    expect(newContact.id).toBeTruthy();
    expect(newContact.id).not.toBe("");

    // Check that conversation ID was generated and contact ID was set
    expect(newConversation.id).toBeTruthy();
    expect(newConversation.id).not.toBe("");
    expect(newConversation.contactId).toBe(newContact.id);

    // Verify the contact was added to store
    const addedContact = updatedContacts.find((c) => c.id === newContact.id);
    expect(addedContact).toBeDefined();
    expect(addedContact?.firstName).toBe("Test");
    expect(addedContact?.lastName).toBe("User");

    // Verify the conversation was added to store
    const addedConversation = updatedConversations.find(
      (c) => c.id === newConversation.id
    );
    expect(addedConversation).toBeDefined();
    expect(addedConversation?.contactId).toBe(newContact.id);
  });

  it("should generate unique IDs for multiple conversations", () => {
    const contact1: Contact = {
      id: "",
      firstName: "User",
      lastName: "One",
      email: "user1@example.com",
      phoneNumber: "+1111111111",
      avatarUrl: "",
      isActive: true,
      notes: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const contact2: Contact = {
      id: "",
      firstName: "User",
      lastName: "Two",
      email: "user2@example.com",
      phoneNumber: "+2222222222",
      avatarUrl: "",
      isActive: true,
      notes: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const conversation1: Conversation = {
      id: "",
      contactId: "",
      lastMessage: "Hello 1",
      lastMessageAt: new Date(),
      lastMessageId: "msg-1",
      unreadCount: 0,
      lastMessageStatus: MessageStatus.READ,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const conversation2: Conversation = {
      id: "",
      contactId: "",
      lastMessage: "Hello 2",
      lastMessageAt: new Date(),
      lastMessageId: "msg-2",
      unreadCount: 0,
      lastMessageStatus: MessageStatus.READ,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    createNewConversation(contact1, conversation1);
    createNewConversation(contact2, conversation2);

    expect(contact1.id).not.toBe(contact2.id);
    expect(conversation1.id).not.toBe(conversation2.id);
    expect(conversation1.contactId).toBe(contact1.id);
    expect(conversation2.contactId).toBe(contact2.id);
  });

  it("should handle conversations with different properties", () => {
    const contact: Contact = {
      id: "",
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phoneNumber: "+1234567890",
      avatarUrl: "https://example.com/avatar.jpg",
      isActive: true,
      notes: "VIP customer",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-02"),
    };

    const conversation: Conversation = {
      id: "",
      contactId: "",
      lastMessage: "Welcome to our service!",
      lastMessageAt: new Date("2024-01-01T10:00:00Z"),
      lastMessageId: "welcome-msg",
      unreadCount: 1,
      lastMessageStatus: MessageStatus.PENDING,
      isActive: true,
      createdAt: new Date("2024-01-01T09:00:00Z"),
      updatedAt: new Date("2024-01-01T10:00:00Z"),
    };

    createNewConversation(contact, conversation);

    const updatedContacts = useStore.getState().contacts;
    const updatedConversations = useStore.getState().conversations;

    const addedContact = updatedContacts.find((c) => c.id === contact.id);
    const addedConversation = updatedConversations.find(
      (c) => c.id === conversation.id
    );

    expect(addedContact?.notes).toBe("VIP customer");
    expect(addedConversation?.unreadCount).toBe(1);
    expect(addedConversation?.lastMessageStatus).toBe(MessageStatus.PENDING);
    expect(addedConversation?.lastMessage).toBe("Welcome to our service!");
  });
});
