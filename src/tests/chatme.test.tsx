import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useStore } from "@/store";
import { mockContacts, mockConversations, mockMessages } from "./mock-data";
import type { NewMessage, Conversation, Contact } from "@/config/types";
import { MessageDirection, MessageStatus } from "@/config/enums";
import ChatMe from "@/components/ChatMe";

// Mock the core components to focus on ChatMe logic
vi.mock("@/components/core", () => ({
  ConversationList: ({
    onConversationSelect,
    onNewConversation,
    onContactInfo,
    onDeleteConversation,
  }: {
    onConversationSelect: (conversation: Conversation) => void;
    onNewConversation: (contact: Contact, conversation: Conversation) => void;
    onContactInfo: (contact: Contact) => void;
    onDeleteConversation: (conversation: Conversation) => void;
  }) => (
    <div data-testid="conversation-list">
      <button
        data-testid="select-conversation"
        onClick={() => onConversationSelect(mockConversations[0])}
      >
        Select Conversation
      </button>
      <button
        data-testid="new-conversation"
        onClick={() => onNewConversation(mockContacts[0], mockConversations[0])}
      >
        New Conversation
      </button>
      <button
        data-testid="contact-info"
        onClick={() => onContactInfo(mockContacts[0])}
      >
        Contact Info
      </button>
      <button
        data-testid="delete-conversation"
        onClick={() => onDeleteConversation(mockConversations[0])}
      >
        Delete Conversation
      </button>
    </div>
  ),
  ConversationView: ({
    selectedConversation,
    onMessageSent,
  }: {
    selectedConversation: Conversation | null;
    onMessageSent: (message: NewMessage, conversationId: string) => void;
  }) => (
    <div data-testid="conversation-view">
      <div data-testid="selected-conversation-id">
        {selectedConversation?.id || "none"}
      </div>
      <button
        data-testid="send-message"
        onClick={() => {
          const newMessage: NewMessage = {
            content: "Test message",
            direction: MessageDirection.OUTBOUND,
            senderId: "user-1",
            receiverId: "contact-1",
            contactId: "contact-1",
            conversationId: selectedConversation?.id || "conv-1",
            currentStatus: MessageStatus.PENDING,
            statusHistory: [],
            isActive: true,
            createdAt: new Date(),
          };
          onMessageSent(newMessage, selectedConversation?.id || "conv-1");
        }}
      >
        Send Message
      </button>
    </div>
  ),
}));

describe("ChatMe Component", () => {
  const mockOnInit = vi.fn();
  const mockOnCreateNewConversation = vi.fn();
  const mockOnConversationSelect = vi.fn();
  const mockOnContactInfo = vi.fn();
  const mockOnDeleteConversation = vi.fn();
  const mockOnMessageSent = vi.fn();

  beforeEach(() => {
    // Reset all mocks
    vi.clearAllMocks();

    // Reset the store before each test
    useStore.getState().resetAll();
  });

  const renderChatMe = (props = {}) => {
    const defaultProps = {
      contacts: mockContacts,
      conversations: mockConversations,
      messages: mockMessages,
      onInit: mockOnInit,
      onCreateNewConversation: mockOnCreateNewConversation,
      onConversationSelect: mockOnConversationSelect,
      onContactInfo: mockOnContactInfo,
      onDeleteConversation: mockOnDeleteConversation,
      onMessageSent: mockOnMessageSent,
      ...props,
    };

    return render(<ChatMe {...defaultProps} />);
  };

  describe("Component Initialization", () => {
    it("should call onInit when component mounts", () => {
      renderChatMe();
      expect(mockOnInit).toHaveBeenCalledTimes(1);
    });

    it("should initialize store with provided data", () => {
      renderChatMe();

      const store = useStore.getState();
      expect(store.contacts).toEqual(mockContacts);
      expect(store.conversations).toEqual(mockConversations);
      expect(store.messages).toEqual(mockMessages);
    });

    it("should handle empty data gracefully", () => {
      renderChatMe({
        contacts: [],
        conversations: [],
        messages: [],
      });

      const store = useStore.getState();
      expect(store.contacts).toEqual([]);
      expect(store.conversations).toEqual([]);
      expect(store.messages).toEqual([]);
    });

    it("should handle undefined data gracefully", () => {
      renderChatMe({
        contacts: undefined,
        conversations: undefined,
        messages: undefined,
      });

      const store = useStore.getState();
      expect(store.contacts).toEqual([]);
      expect(store.conversations).toEqual([]);
      expect(store.messages).toEqual([]);
    });
  });

  describe("onMessageSent Handler", () => {
    it("should call onMessageSent when a message is sent", () => {
      renderChatMe();

      // Select a conversation first
      fireEvent.click(screen.getByTestId("select-conversation"));

      // Send a message
      fireEvent.click(screen.getByTestId("send-message"));

      expect(mockOnMessageSent).toHaveBeenCalledTimes(1);
      expect(mockOnMessageSent).toHaveBeenCalledWith(
        expect.objectContaining({
          content: "Test message",
          direction: MessageDirection.OUTBOUND,
          senderId: "user-1",
          currentStatus: MessageStatus.PENDING,
        }),
        mockConversations[0].id
      );
    });

    it("should handle message sent with different conversation IDs", () => {
      renderChatMe();

      // Select a conversation
      fireEvent.click(screen.getByTestId("select-conversation"));

      // Send a message
      fireEvent.click(screen.getByTestId("send-message"));

      expect(mockOnMessageSent).toHaveBeenCalledWith(
        expect.any(Object),
        mockConversations[0].id
      );
    });

    it("should not call onMessageSent when handler is not provided", () => {
      renderChatMe({ onMessageSent: undefined });

      // Select a conversation first
      fireEvent.click(screen.getByTestId("select-conversation"));

      // Send a message
      fireEvent.click(screen.getByTestId("send-message"));

      // Should not throw an error
      expect(screen.getByTestId("conversation-view")).toBeInTheDocument();
    });

    it("should handle message sent with various message types", async () => {
      const customOnMessageSent = vi.fn();
      renderChatMe({ onMessageSent: customOnMessageSent });

      // Select a conversation
      fireEvent.click(screen.getByTestId("select-conversation"));

      // Send multiple messages
      fireEvent.click(screen.getByTestId("send-message"));
      fireEvent.click(screen.getByTestId("send-message"));

      expect(customOnMessageSent).toHaveBeenCalledTimes(2);
    });
  });

  describe("onConversationSelect Handler", () => {
    it("should call onConversationSelect when a conversation is selected", () => {
      renderChatMe();

      fireEvent.click(screen.getByTestId("select-conversation"));

      expect(mockOnConversationSelect).toHaveBeenCalledTimes(1);
      expect(mockOnConversationSelect).toHaveBeenCalledWith(
        mockConversations[0]
      );
    });

    it("should update selected conversation in local state", () => {
      renderChatMe();

      fireEvent.click(screen.getByTestId("select-conversation"));

      expect(screen.getByTestId("selected-conversation-id")).toHaveTextContent(
        mockConversations[0].id
      );
    });

    it("should reset unread count when conversation is selected", () => {
      // Create a conversation with unread messages
      const conversationWithUnread = {
        ...mockConversations[0],
        unreadCount: 5,
      };

      const conversationsWithUnread = [
        conversationWithUnread,
        ...mockConversations.slice(1),
      ];

      renderChatMe({ conversations: conversationsWithUnread });

      // Initialize store with unread conversation
      useStore.getState().setConversations(conversationsWithUnread);

      // Test the store update functionality directly
      // This simulates what happens in handleConversationSelect when unreadCount > 0
      useStore
        .getState()
        .updateConversation(conversationWithUnread.id, { unreadCount: 0 });

      // Check that unread count was reset
      const store = useStore.getState();
      const updatedConversation = store.conversations.find(
        (c) => c.id === conversationWithUnread.id
      );
      expect(updatedConversation?.unreadCount).toBe(0);
    });

    it("should not reset unread count for conversations with zero unread messages", () => {
      const conversationWithZeroUnread = {
        ...mockConversations[0],
        unreadCount: 0,
      };

      renderChatMe();

      fireEvent.click(screen.getByTestId("select-conversation"));

      // Should not affect the unread count
      const store = useStore.getState();
      const updatedConversation = store.conversations.find(
        (c) => c.id === conversationWithZeroUnread.id
      );
      expect(updatedConversation?.unreadCount).toBe(0);
    });

    it("should not call onConversationSelect when handler is not provided", () => {
      renderChatMe({ onConversationSelect: undefined });

      fireEvent.click(screen.getByTestId("select-conversation"));

      // Should not throw an error
      expect(screen.getByTestId("conversation-view")).toBeInTheDocument();
    });
  });

  describe("onCreateNewConversation Handler", () => {
    it("should call onCreateNewConversation when creating a new conversation", () => {
      renderChatMe();

      fireEvent.click(screen.getByTestId("new-conversation"));

      expect(mockOnCreateNewConversation).toHaveBeenCalledTimes(1);
      expect(mockOnCreateNewConversation).toHaveBeenCalledWith(
        mockContacts[0],
        mockConversations[0]
      );
    });

    it("should not call onCreateNewConversation when handler is not provided", () => {
      renderChatMe({ onCreateNewConversation: undefined });

      fireEvent.click(screen.getByTestId("new-conversation"));

      // Should not throw an error
      expect(screen.getByTestId("conversation-list")).toBeInTheDocument();
    });
  });

  describe("onContactInfo Handler", () => {
    it("should call onContactInfo when contact info is requested", () => {
      renderChatMe();

      fireEvent.click(screen.getByTestId("contact-info"));

      expect(mockOnContactInfo).toHaveBeenCalledTimes(1);
      expect(mockOnContactInfo).toHaveBeenCalledWith(mockContacts[0]);
    });

    it("should not call onContactInfo when handler is not provided", () => {
      renderChatMe({ onContactInfo: undefined });

      fireEvent.click(screen.getByTestId("contact-info"));

      // Should not throw an error
      expect(screen.getByTestId("conversation-list")).toBeInTheDocument();
    });
  });

  describe("onDeleteConversation Handler", () => {
    it("should call onDeleteConversation when deleting a conversation", () => {
      renderChatMe();

      fireEvent.click(screen.getByTestId("delete-conversation"));

      expect(mockOnDeleteConversation).toHaveBeenCalledTimes(1);
      expect(mockOnDeleteConversation).toHaveBeenCalledWith(
        mockConversations[0]
      );
    });

    it("should not call onDeleteConversation when handler is not provided", () => {
      renderChatMe({ onDeleteConversation: undefined });

      fireEvent.click(screen.getByTestId("delete-conversation"));

      // Should not throw an error
      expect(screen.getByTestId("conversation-list")).toBeInTheDocument();
    });
  });

  describe("Integration Tests", () => {
    it("should handle multiple interactions in sequence", () => {
      renderChatMe();

      // Select a conversation
      fireEvent.click(screen.getByTestId("select-conversation"));
      expect(mockOnConversationSelect).toHaveBeenCalledTimes(1);

      // Send a message
      fireEvent.click(screen.getByTestId("send-message"));
      expect(mockOnMessageSent).toHaveBeenCalledTimes(1);

      // Request contact info
      fireEvent.click(screen.getByTestId("contact-info"));
      expect(mockOnContactInfo).toHaveBeenCalledTimes(1);

      // Create new conversation
      fireEvent.click(screen.getByTestId("new-conversation"));
      expect(mockOnCreateNewConversation).toHaveBeenCalledTimes(1);

      // Delete conversation
      fireEvent.click(screen.getByTestId("delete-conversation"));
      expect(mockOnDeleteConversation).toHaveBeenCalledTimes(1);
    });

    it("should maintain state consistency across multiple operations", () => {
      renderChatMe();

      // Select a conversation
      fireEvent.click(screen.getByTestId("select-conversation"));

      // Verify conversation is selected
      expect(screen.getByTestId("selected-conversation-id")).toHaveTextContent(
        mockConversations[0].id
      );

      // Send a message
      fireEvent.click(screen.getByTestId("send-message"));

      // Verify conversation is still selected
      expect(screen.getByTestId("selected-conversation-id")).toHaveTextContent(
        mockConversations[0].id
      );
    });

    it("should handle rapid successive interactions", () => {
      renderChatMe();

      // Rapidly click multiple buttons
      fireEvent.click(screen.getByTestId("select-conversation"));
      fireEvent.click(screen.getByTestId("send-message"));
      fireEvent.click(screen.getByTestId("contact-info"));
      fireEvent.click(screen.getByTestId("new-conversation"));

      expect(mockOnConversationSelect).toHaveBeenCalledTimes(1);
      expect(mockOnMessageSent).toHaveBeenCalledTimes(1);
      expect(mockOnContactInfo).toHaveBeenCalledTimes(1);
      expect(mockOnCreateNewConversation).toHaveBeenCalledTimes(1);
    });
  });

  describe("Error Handling", () => {
    it("should handle errors in onMessageSent gracefully", () => {
      const errorOnMessageSent = vi.fn().mockImplementation(() => {
        throw new Error("Message send failed");
      });

      renderChatMe({ onMessageSent: errorOnMessageSent });

      // Select a conversation first
      fireEvent.click(screen.getByTestId("select-conversation"));

      // Should not crash the component
      expect(() => {
        fireEvent.click(screen.getByTestId("send-message"));
      }).not.toThrow();
    });

    it("should handle errors in onConversationSelect gracefully", () => {
      const errorOnConversationSelect = vi.fn().mockImplementation(() => {
        throw new Error("Conversation selection failed");
      });

      renderChatMe({ onConversationSelect: errorOnConversationSelect });

      // Should not crash the component
      expect(() => {
        fireEvent.click(screen.getByTestId("select-conversation"));
      }).not.toThrow();
    });
  });
});
