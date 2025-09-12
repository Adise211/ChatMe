import { CheckCheck, MoreVertical, User, Trash2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { type Conversation, type Contact, MessageStatus } from "@/config/types";
import { getContactById, getInitials } from "@/config/helpers";
import { useStore } from "@/store";

interface ConversationItemProps {
  currentConversation: Conversation;
  onClick: (conversation: Conversation) => void;
  onContactInfo: (conversation: Conversation) => void;
  onDeleteConversation: (conversation: Conversation) => void;
}
const ConversationItem = ({
  currentConversation,
  onClick,
  onContactInfo,
  onDeleteConversation,
}: ConversationItemProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);
  const menuRef = useRef(null);
  const contacts = useStore((state) => state.contacts);

  // Get the contact for the current conversation
  useEffect(() => {
    const contact = getContactById(currentConversation.contactId, contacts);
    setCurrentContact(contact || null);
  }, [currentConversation, contacts]);

  const formatTime = (timestamp: Date) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    const now = new Date();
    // Calculate the difference in hours from now (timestamp)
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    // If the difference is less than 24 hours, return the time (in 12 hour format)
    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } else if (diffInHours < 48) {
      // If the difference is less than 48 hours, return "Yesterday"
      return "Yesterday";
    } else {
      // If the difference is more than 48 hours, return the date (in month and day format)
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  // const initials = getInitials(currentContact?.name || "");

  // Handle clicking outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleMenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleContactInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowMenu(false);
    if (onContactInfo) {
      onContactInfo(currentConversation);
    }
  };

  const handleDeleteConversation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowMenu(false);
    if (onDeleteConversation) {
      onDeleteConversation(currentConversation);
    }
  };

  const handleItemClick = () => {
    setShowMenu(false);
    if (onClick) {
      onClick(currentConversation);
    }
  };

  return (
    <div
      ref={menuRef}
      className={`flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 relative ${
        currentConversation.isActive
          ? "bg-blue-50 border-r-2 border-blue-500"
          : ""
      }`}
      onClick={handleItemClick}
    >
      {/* Avatar */}
      <div className="flex-shrink-0 mr-3">
        <div className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center text-white font-semibold text-sm">
          {currentContact?.avatarUrl ? (
            <img
              src={currentContact.avatarUrl}
              alt={currentContact.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            getInitials(currentContact?.name || "")
          )}
        </div>
      </div>

      {/* Conversation Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h5
            className={`text-sm font-medium truncate ${
              currentConversation.unreadCount > 0 ? "font-semibold" : ""
            }`}
          >
            {currentContact?.name}
          </h5>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 flex-shrink-0 mr-2">
              {formatTime(currentConversation?.lastMessageAt || new Date())}
            </span>
            {/* Menu Button */}
            <button
              onClick={(e) => handleMenuToggle(e)}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p
            className={`text-sm truncate ${
              currentConversation.unreadCount > 0
                ? "text-gray-900 font-medium"
                : "text-gray-600"
            }`}
          >
            {currentConversation.lastMessage || "No messages yet"}
          </p>

          {/* Message Status */}
          <div className="flex items-center ml-2">
            {currentConversation.unreadCount > 0 ? (
              <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {currentConversation.unreadCount > 99
                  ? "99+"
                  : currentConversation.unreadCount}
              </div>
            ) : (
              currentConversation.lastMessageStatus ===
                MessageStatus.DELIVERED && (
                <CheckCheck className="w-4 h-4 text-blue-500" />
              )
            )}
          </div>
        </div>
      </div>

      {/* Menu Dropdown */}
      {showMenu && (
        <div className="absolute right-2 top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
          <div className="py-1">
            <button
              onClick={handleContactInfo}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <User className="w-4 h-4 mr-3 text-gray-500" />
              Contact Info
            </button>
            <button
              onClick={handleDeleteConversation}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4 mr-3 text-red-500" />
              Delete Conversation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationItem;
