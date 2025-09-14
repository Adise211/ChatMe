import { useState } from "react";
import { Search, Plus } from "lucide-react";

interface ConversationListHeaderProps {
  onSearch: (value: string) => void;
  onNewConversationDialog: () => void;
}

const ConversationListHeader = ({
  onSearch,
  onNewConversationDialog,
}: ConversationListHeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleNewConversationDialog = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.currentTarget.blur(); // Remove focus from the button
    onNewConversationDialog();
  };

  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search conversations..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
          />
        </div>

        {/* New Conversation Button */}
        <button
          onClick={handleNewConversationDialog}
          className="flex-shrink-0 w-8 h-8 bg-primary hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:shadow-md active:scale-95"
          style={{ borderRadius: "8px" }}
          title="New Conversation"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ConversationListHeader;
