import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import DateHeader from "./DateHeader";
import MessageInput from "./MessageInput";
import { getMessagesForConversation } from "@/config/helpers";
import type { Conversation, NewMessage } from "@/config/types";
import type { Message } from "@/config/types";
import { useStore } from "@/store";
import { MessageDirection, MessageStatus } from "@/config/enums";

interface ConversationViewProps {
  selectedConversation: Conversation | null;
  onMessageSent: (message: NewMessage, conversationId: string) => void;
}

const ConversationView = ({
  selectedConversation,
  onMessageSent,
}: ConversationViewProps) => {
  // const DEFAULT_NEW_MESSAGE_DATA: NewMessage = {
  //   contactId: "",
  //   conversationId: "",
  //   content: "",
  //   senderId: "",
  //   receiverId: "",
  //   direction: MessageDirection.OUTBOUND,
  //   currentStatus: MessageStatus.PENDING,
  //   statusHistory: [],
  //   mediaUrl: null,
  //   mediaType: null,
  //   isActive: true,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messages = useStore((state) => state.messages);
  // Get messages for the selected conversation
  const [filteredMessages, setFilteredMessages] = useState(() => {
    return selectedConversation?.id
      ? getMessagesForConversation(selectedConversation.id)
      : [];
  });

  // Update messages when conversation changes or when messages in store change
  useEffect(() => {
    if (selectedConversation?.id) {
      const filtered = getMessagesForConversation(selectedConversation.id);
      console.log(
        "ddd - Filtered messages for conversation:",
        selectedConversation.id,
        filtered
      );
      console.log("eee - All messages in store:", messages);
      setFilteredMessages(filtered);
    } else {
      setFilteredMessages([]);
    }
  }, [selectedConversation, messages]);

  const scrollToBottom = () => {
    // scroll to the bottom of the messages container if there are messages
    if (messagesEndRef.current && filteredMessages.length > 0) {
      const messagesContainer = messagesEndRef.current.parentElement;
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Only scroll to bottom if there are messages
    if (filteredMessages.length > 0) {
      scrollToBottom();
    }
  }, [filteredMessages]);

  const handleSendMessage = (messageText: string, file: File | null) => {
    try {
      console.log(
        "handleSendMessage - selectedConversation:",
        selectedConversation
      );
      const contactId = selectedConversation?.contactId || "";
      const conversationId = selectedConversation?.id || "";
      console.log("handleSendMessage - contactId:", contactId);
      console.log("handleSendMessage - conversationId:", conversationId);

      // TODOD: It is the user's responsibility to create an ID for the message and the sender
      const newMessage: NewMessage = {
        contactId: contactId,
        conversationId: conversationId,
        content: messageText,
        senderId: "", // user id
        receiverId: contactId,
        direction: MessageDirection.OUTBOUND,
        currentStatus: MessageStatus.PENDING,
        statusHistory: [],
        mediaUrl: file ? URL.createObjectURL(file) : null,
        mediaType: file ? getMediaType(file.type) : null,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      console.log("handleSendMessage - newMessage:", newMessage);

      // Notify parent component to refresh conversation list
      if (onMessageSent) {
        onMessageSent(newMessage, conversationId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMediaType = (mimeType: string) => {
    if (mimeType.startsWith("image/")) return "image";
    if (mimeType.startsWith("video/")) return "video";
    if (mimeType.startsWith("audio/")) return "audio";
    return "document";
  };

  // Group messages by date and sort everything
  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [key: string]: Message[] } = {};

    messages.forEach((message) => {
      const date = new Date(message.createdAt);
      const dateKey = date.toDateString(); // e.g., "Mon Jan 15 2024"

      // Create a new group if it doesn't exist
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }

      // Add the message to the group
      groups[dateKey].push(message);
    });

    // Sort messages within each group by timestamp (oldest first) - time order
    Object.keys(groups).forEach((dateKey) => {
      groups[dateKey].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    });

    return groups;
  };

  const messageGroups = groupMessagesByDate(filteredMessages as Message[]);
  // Get sorted date keys (oldest first) - date order
  const sortedDateKeys = Object.keys(messageGroups).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  // Show placeholder when no conversation is selected
  if (!selectedConversation) {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
            <p className="text-sm">
              Choose a conversation from the list to start messaging
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-4">
        {sortedDateKeys.map((dateKey) => (
          <div key={dateKey}>
            <DateHeader date={new Date(dateKey).toDateString()} />
            {messageGroups[dateKey].map((message) => (
              <div
                key={message.id || message.createdAt.toString()}
                className="animate-fadeIn"
              >
                <MessageBubble message={message} />
              </div>
            ))}
          </div>
        ))}
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input - Fixed at bottom */}
      <div className="flex-shrink-0">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ConversationView;
