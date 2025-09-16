import { describe, it, expect, beforeEach } from "vitest";
import { useStore } from "@/store";
import { mockConversations } from "./mock-data";
import { deleteConversation } from "./mock-functions";
import type { Conversation } from "@/config/types";
import { MessageStatus } from "@/config/enums";

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
