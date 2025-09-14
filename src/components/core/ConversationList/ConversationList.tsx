import { useState, useMemo } from "react";
import ConversationListHeader from "./ConversationListHeader";
import ConversationItem from "./ConversationItem";
import { markConversationAsRead, getContactById } from "@/config/helpers";
import { type Conversation } from "@/config/types";
import { useStore } from "@/store";

export interface ConversationListProps {
  onConversationSelect: (conversation: Conversation) => void;
  onNewConversation: () => void;
  refreshTrigger: number;
  onContactInfo: (conversation: Conversation) => void;
  onDeleteConversation: (conversation: Conversation) => void;
}
const ConversationList = ({
  onConversationSelect,
  onNewConversation,
  refreshTrigger = 0,
  onContactInfo,
  onDeleteConversation,
}: ConversationListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [internalRefreshTrigger, setInternalRefreshTrigger] = useState(0);
  const conversations = useStore((state) => state.conversations);
  const contacts = useStore((state) => state.contacts);

  // Filter conversations based on search term
  const filteredConversations = useMemo(() => {
    if (!searchTerm.trim()) {
      return conversations.sort(
        (a, b) =>
          new Date(b.lastMessageAt || new Date()).getTime() -
          new Date(a.lastMessageAt || new Date()).getTime()
      );
    }

    return conversations
      .filter(
        (conversation) =>
          getContactById(conversation.contactId, contacts)
            ?.name.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          conversation.lastMessage
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
      .sort(
        (a, b) =>
          new Date(b.lastMessageAt || new Date()).getTime() -
          new Date(a.lastMessageAt || new Date()).getTime()
      );
  }, [searchTerm, refreshTrigger, internalRefreshTrigger]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleConversationClick = (conversation: Conversation) => {
    // Mark conversation as read when clicked
    markConversationAsRead(conversation);

    // Trigger a re-render to update the unread count
    setInternalRefreshTrigger((prev) => prev + 1);

    if (onConversationSelect) {
      onConversationSelect(conversation);
    }
  };

  const handleNewConversation = () => {
    if (onNewConversation) {
      onNewConversation();
    }
  };

  const handleContactInfo = (conversation: Conversation) => {
    if (onContactInfo) {
      onContactInfo(conversation);
    }
  };

  const handleDeleteConversation = (conversation: Conversation) => {
    if (onDeleteConversation) {
      onDeleteConversation(conversation);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Search Input with New Conversation Button */}
      <ConversationListHeader
        onSearch={handleSearch}
        onNewConversation={handleNewConversation}
      />

      {/* Conversations List */}
      <div
        className="flex-1 overflow-y-auto min-h-0"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#d1d5db #f3f4f6",
          maxHeight: "calc(100vh - 80px)",
        }}
      >
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              currentConversation={conversation}
              onClick={handleConversationClick}
              onContactInfo={handleContactInfo}
              onDeleteConversation={handleDeleteConversation}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <p className="text-lg font-medium mb-2">No conversations found</p>
              <p className="text-sm">
                {searchTerm
                  ? `No results for "${searchTerm}"`
                  : "Start a new conversation"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationList;
