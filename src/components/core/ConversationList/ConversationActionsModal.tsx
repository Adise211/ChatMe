import type { Contact, Conversation } from "@/config/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConversationActionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "contact" | "delete" | "none";
  currentContact: Contact | null;
  currentConversation: Conversation | null;
  onConfirmDelete: (conversation: Conversation) => void;
}
const ConversationActionsModal = ({
  isOpen,
  onClose,
  type, // 'contact' or 'delete' or 'none'
  currentContact, // contact data for contact info modal
  currentConversation, // conversation data for delete confirmation
  onConfirmDelete,
}: ConversationActionsModalProps) => {
  const renderContactInfo = () => {
    const formatDate = (dateString: Date) => {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <p className="text-gray-900">
            {currentContact
              ? `${currentContact.firstName} ${currentContact.lastName}`
              : ""}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <p className="text-gray-900">
            {currentContact?.phoneNumber || "N/A"}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <p className="text-gray-900">{currentContact?.email || "N/A"}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Created
          </label>
          <p className="text-gray-900">
            {formatDate(currentContact?.createdAt || new Date())}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <p className="text-gray-900">
            {currentContact?.notes || "No notes available"}
          </p>
        </div>
      </div>
    );
  };

  const renderDeleteConfirmation = () => (
    <div className="space-y-4">
      {/* Additional delete confirmation content can go here if needed */}
    </div>
  );

  const handleDelete = () => {
    onConfirmDelete(currentConversation as Conversation);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {type === "contact" ? "Contact Information" : "Confirm Delete"}
          </DialogTitle>
          {type === "delete" && (
            <DialogDescription>
              Are you sure you want to delete the conversation with{" "}
              <span className="font-medium">
                {currentContact
                  ? `${currentContact.firstName} ${currentContact.lastName}`
                  : ""}
              </span>
              ? This action cannot be undone.
            </DialogDescription>
          )}
        </DialogHeader>

        {type === "contact" && renderContactInfo()}
        {type === "delete" && renderDeleteConfirmation()}

        <DialogFooter>
          {type === "contact" && (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          )}
          {type === "delete" && (
            <>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConversationActionsModal;
