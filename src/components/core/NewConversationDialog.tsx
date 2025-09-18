import { useState } from "react";
import { User, Phone, Mail } from "lucide-react";
import type { Contact, Conversation } from "@/config/types";
import { newContactSchema } from "@/config/schema";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageStatus } from "@/config/enums";

interface NewConversationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateNewConversation: (
    contact: Contact,
    conversation: Conversation
  ) => void;
}

const NewConversationDialog = ({
  isOpen,
  onClose,
  onCreateNewConversation,
}: NewConversationDialogProps) => {
  const DEFAULT_CONTACT_DATA = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    notes: "",
    avatarUrl: "",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // const DEFAULT_CONVERSATION_DATA = {
  //   contactId: "",
  //   lastMessage: "",
  //   lastMessageAt: new Date(),
  //   lastMessageId: "",
  //   unreadCount: 0,
  //   lastMessageStatus: MessageStatus.PENDING,
  //   isActive: true,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };

  const [formData, setFormData] = useState(DEFAULT_CONTACT_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validationResult = newContactSchema.safeParse(formData);
      if (!validationResult.success) {
        const validationErrors = validationResult.error.issues.reduce(
          (acc, issue) => {
            acc[issue.path[0] as string] = issue.message;
            return acc;
          },
          {} as Record<string, string>
        );
        setErrors(validationErrors);
        console.error(validationErrors);

        return;
      } else {
        setErrors({});
        setIsSubmitting(true);
        console.log("formData:", formData);

        // Create conversation data in the new format
        const contactData = {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          email: formData.email.trim(),
          notes: formData.notes.trim(),
          avatarUrl: "",
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        const conversationData = {
          contactId: "",
          lastMessage: "",
          lastMessageAt: new Date(),
          lastMessageId: "",
          unreadCount: 0,
          lastMessageStatus: MessageStatus.PENDING,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // Pass to the parent component
        if (onCreateNewConversation) {
          onCreateNewConversation(contactData, conversationData);
        }

        handleClose();
      }
    } catch (error) {
      console.error("Error creating conversation:", error);
      alert("Failed to create conversation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData(DEFAULT_CONTACT_DATA);
    setErrors({});
    setIsSubmitting(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold text-gray-900">
            New Conversation
          </AlertDialogTitle>
          <AlertDialogDescription>
            Create a new conversation by adding contact details below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className="pl-10"
                required
                error={errors.firstName}
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className="pl-10"
                required
                error={errors.lastName}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="pl-10"
                error={errors.phoneNumber}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="h-5 w-5 text-gray-400 absolute left-3" />
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className="pl-10"
                error={errors.email}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Notes (Optional)
            </label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Add any notes about this contact..."
              rows={3}
              className="resize-none"
              error={errors.notes}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2 mt-6">
            <AlertDialogCancel disabled={isSubmitting}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleSubmit({
                  preventDefault: () => {},
                } as React.FormEvent<HTMLFormElement>);
              }}
              disabled={isSubmitting}
              className="flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating...</span>
                </>
              ) : (
                <span>Create Conversation</span>
              )}
            </AlertDialogAction>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewConversationDialog;
