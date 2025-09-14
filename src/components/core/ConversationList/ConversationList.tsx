import { useState, useMemo } from "react";
import ConversationListHeader from "./ConversationListHeader";
import ConversationItem from "./ConversationItem";
import { markConversationAsRead, getContactById } from "@/config/helpers";
import { type Contact, type Conversation } from "@/config/types";
import { useStore } from "@/store";
import NewConversationDialog from "../NewConversationDialog";

export interface ConversationListProps {
  onConversationSelect: (conversation: Conversation) => void;
  onNewConversation: (contact: Contact, conversation: Conversation) => void;
  onContactInfo: (conversation: Conversation) => void;
  onDeleteConversation: (conversation: Conversation) => void;
}
const ConversationList = ({
  onConversationSelect,
  onNewConversation,
  onContactInfo,
  onDeleteConversation,
}: ConversationListProps) => {
  const conversations = useStore((state) => state.conversations);
  const contacts = useStore((state) => state.contacts);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewConversationDialogOpen, setIsNewConversationDialogOpen] =
    useState(false);

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
  }, [searchTerm, conversations, contacts]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleConversationClick = (conversation: Conversation) => {
    // Mark conversation as read when clicked
    markConversationAsRead(conversation);
    // Set the selected conversation for local use
    setSelectedConversation(conversation);

    // Pass the selected conversation to the parent component
    if (onConversationSelect) {
      onConversationSelect(conversation);
    }
  };

  const handleNewConversationDialog = () => {
    // open dialog
    setIsNewConversationDialogOpen(true);
  };

  // Create new conversation and create contact
  const handleCreateNewConversation = (
    contact: Contact,
    conversation: Conversation
  ) => {
    // Pass the new conversation and contact to the parent component
    if (onNewConversation) {
      onNewConversation(contact, conversation);
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
        onNewConversationDialog={handleNewConversationDialog}
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
              conversationItem={conversation}
              isSelected={selectedConversation?.id === conversation.id}
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
      <NewConversationDialog
        isOpen={isNewConversationDialogOpen}
        onClose={() => setIsNewConversationDialogOpen(false)}
        onCreateNewConversation={handleCreateNewConversation}
      />
    </div>
  );
};

export default ConversationList;
