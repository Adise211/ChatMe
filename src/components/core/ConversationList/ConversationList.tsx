import { useState, useMemo } from "react";
import ConversationListHeader from "./ConversationListHeader";
import ConversationItem from "./ConversationItem";
import { markConversationAsRead, getContactById } from "@/config/helpers";
import { type Contact, type Conversation } from "@/config/types";
import { useStore } from "@/store";
import NewConversationDialog from "../NewConversationDialog";
import ConversationActionsModal from "./ConversationActionsModal";

export interface ConversationListProps {
  onConversationSelect: (conversation: Conversation) => void;
  onNewConversation: (contact: Contact, conversation: Conversation) => void;
  onContactInfo: (contact: Contact) => void;
  onDeleteConversation: (conversation: Conversation) => void;
}
const ConversationList = ({
  onConversationSelect,
  onNewConversation,
  onContactInfo,
  onDeleteConversation,
}: ConversationListProps) => {
  const conversations = useStore((state) => state.conversations);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewConversationDialogOpen, setIsNewConversationDialogOpen] =
    useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "contact" | "delete" | "none";
    contact: Contact | null;
    conversation: Conversation | null;
  }>({
    isOpen: false,
    type: "none",
    contact: null,
    conversation: null,
  });

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
      .filter((conversation) => {
        const contact = getContactById(conversation.contactId);
        const fullName = contact
          ? `${contact.firstName} ${contact.lastName}`
          : "";
        return (
          fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          conversation.lastMessage
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      })
      .sort(
        (a, b) =>
          new Date(b.lastMessageAt || new Date()).getTime() -
          new Date(a.lastMessageAt || new Date()).getTime()
      );
  }, [searchTerm, conversations]);

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

  const handleContactInfo = (contact: Contact) => {
    setModalState({
      isOpen: true,
      type: "contact",
      contact: contact,
      conversation: null,
    });

    if (onContactInfo) {
      onContactInfo(contact);
    }
  };

  const handleConfirmDeleteDialog = (conversation: Conversation) => {
    setModalState({
      isOpen: true,
      type: "delete",
      contact: null,
      conversation: conversation,
    });
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
              onConfirmDeleteDialog={handleConfirmDeleteDialog}
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
      {/* New Conversation Dialog */}
      <NewConversationDialog
        isOpen={isNewConversationDialogOpen}
        onClose={() => setIsNewConversationDialogOpen(false)}
        onCreateNewConversation={handleCreateNewConversation}
      />
      {/* Contact Info Dialog */}
      <ConversationActionsModal
        isOpen={modalState.isOpen}
        onClose={() =>
          setModalState({
            isOpen: false,
            type: "none",
            contact: null,
            conversation: null,
          })
        }
        type={modalState.type as "contact" | "delete" | "none"}
        currentContact={modalState.contact}
        currentConversation={modalState.conversation}
        onConfirmDelete={handleDeleteConversation}
      />
    </div>
  );
};

export default ConversationList;
