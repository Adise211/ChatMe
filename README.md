# ChatMe UI Library

A modern, responsive React chat interface library built with TypeScript, Tailwind CSS, and Radix UI components. ChatMe provides a complete chat experience with conversation management, message handling, and contact integration.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **TypeScript Support**: Full type safety with Zod schema validation
- **State Management**: Built-in Zustand store for efficient state handling
- **Accessible Components**: Radix UI primitives for accessibility
- **Media Support**: Image and video message handling with loading states
- **Real-time Ready**: Event-driven architecture for real-time messaging
- **Customizable**: Flexible theming and component customization
- **Error Handling**: Graceful error handling for all callbacks
- **Testing**: Comprehensive test suite with Vitest

## 📦 Installation

```bash
npm install chatme
# or
yarn add chatme
# or
pnpm add chatme
```

### Peer Dependencies

ChatMe requires the following peer dependencies:

```bash
npm install react react-dom
npm install @radix-ui/react-alert-dialog @radix-ui/react-dialog @radix-ui/react-slot
npm install tailwindcss class-variance-authority clsx tailwind-merge
npm install lucide-react zustand zod uuid
```

## 🎯 Quick Start

```tsx
import React from "react";
import ChatMe from "chatme";
import type { Contact, Conversation, Message } from "chatme";

const App = () => {
  const contacts: Contact[] = [
    {
      id: "contact-1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "+1234567890",
      avatarUrl: "https://example.com/avatar.jpg",
      isActive: true,
      createdAt: new Date(),
    },
  ];

  const conversations: Conversation[] = [
    {
      id: "conv-1",
      contactId: "contact-1",
      lastMessage: "Hello there!",
      lastMessageAt: new Date(),
      lastMessageId: "msg-1",
      unreadCount: 0,
      lastMessageStatus: "READ",
      isActive: true,
      createdAt: new Date(),
    },
  ];

  const messages: Message[] = [
    {
      id: "msg-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      content: "Hello there!",
      senderId: "contact-1",
      receiverId: "user-1",
      direction: "INBOUND",
      currentStatus: "READ",
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    },
  ];

  return (
    <ChatMe
      contacts={contacts}
      conversations={conversations}
      messages={messages}
      onInit={() => console.log("ChatMe initialized")}
      onCreateNewConversation={(contact, conversation) => {
        console.log("New conversation created", { contact, conversation });
      }}
      onConversationSelect={(conversation) => {
        console.log("Conversation selected", conversation);
      }}
      onContactInfo={(contact) => {
        console.log("Contact info requested", contact);
      }}
      onDeleteConversation={(conversation) => {
        console.log("Conversation deleted", conversation);
      }}
      onMessageSent={(message, conversationId) => {
        console.log("Message sent", { message, conversationId });
      }}
    />
  );
};

export default App;
```

## 🏗️ Architecture

### Core Components

- **ChatMe**: Main container component
- **ConversationList**: Left sidebar with conversation list
- **ConversationView**: Right panel with message display and input
- **MessageBubble**: Individual message component
- **MessageInput**: Message composition area

### State Management

ChatMe uses Zustand for state management with the following store structure:

```typescript
interface StoreState {
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[];
  setContacts: (contacts: Contact[]) => void;
  setConversations: (conversations: Conversation[]) => void;
  setMessages: (messages: Message[]) => void;
  updateConversation: (id: string, updates: Partial<Conversation>) => void;
  // ... other methods
}
```

## 📚 API Reference

### ChatMe Props

| Prop                      | Type                                                     | Required | Description                           |
| ------------------------- | -------------------------------------------------------- | -------- | ------------------------------------- |
| `contacts`                | `Contact[]`                                              | ✅       | Array of contact objects              |
| `conversations`           | `Conversation[]`                                         | ✅       | Array of conversation objects         |
| `messages`                | `Message[]`                                              | ✅       | Array of message objects              |
| `onInit`                  | `() => void`                                             | ✅       | Called when component initializes     |
| `onCreateNewConversation` | `(contact: Contact, conversation: Conversation) => void` | ✅       | Called when creating new conversation |
| `onConversationSelect`    | `(conversation: Conversation) => void`                   | ✅       | Called when conversation is selected  |
| `onContactInfo`           | `(contact: Contact) => void`                             | ✅       | Called when contact info is requested |
| `onDeleteConversation`    | `(conversation: Conversation) => void`                   | ✅       | Called when conversation is deleted   |
| `onMessageSent`           | `(message: NewMessage, conversationId: string) => void`  | ✅       | Called when message is sent           |

### Data Types

#### Contact

```typescript
interface Contact {
  id?: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: string;
  avatarUrl?: string;
  isActive: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt?: Date;
}
```

#### Conversation

```typescript
interface Conversation {
  id?: string;
  contactId: string;
  lastMessage?: string;
  lastMessageAt?: Date;
  lastMessageId: string;
  unreadCount: number;
  lastMessageStatus: MessageStatus;
  lastMessageDirection?: MessageDirection;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
```

#### Message

```typescript
interface Message {
  id?: string;
  contactId: string;
  conversationId: string;
  content: string;
  senderId: string;
  receiverId: string;
  mediaType?: string | null;
  mediaUrl?: string | null;
  direction: MessageDirection;
  currentStatus: MessageStatus;
  statusHistory: StatusHistory[];
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
```

#### Enums

```typescript
enum MessageDirection {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

enum MessageStatus {
  PENDING = "PENDING",
  SENT = "SENT",
  DELIVERED = "DELIVERED",
  READ = "READ",
  FAILED = "FAILED",
}
```

## 🎨 Customization

### Styling

ChatMe uses Tailwind CSS for styling. You can customize the appearance by:

1. **Overriding CSS classes**: Use Tailwind's utility classes
2. **Custom themes**: Extend the default color palette
3. **Component variants**: Use class-variance-authority for component variants

### Example Custom Styling

```css
/* Custom chat theme */
.chatme-container {
  @apply bg-gray-50 border border-gray-200 rounded-lg;
}

.chatme-conversation-list {
  @apply bg-white border-r border-gray-200;
}

.chatme-message-bubble {
  @apply rounded-lg px-4 py-2 max-w-xs;
}

.chatme-message-bubble.inbound {
  @apply bg-blue-500 text-white;
}

.chatme-message-bubble.outbound {
  @apply bg-gray-200 text-gray-800;
}
```

## 🧪 Testing

ChatMe includes comprehensive tests using Vitest and React Testing Library:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **Error Handling Tests**: Graceful error handling verification
- **Mock Data**: Comprehensive test data for development

## 🚀 Live Demo

### Sandbox Preview

Try ChatMe in your browser with our interactive sandbox:

**🚀 [HTML Demo](stackblitz-demo.html)** - Interactive chat demo (works immediately!)

**⚡ [Local Development](http://localhost:5177)** - Full demo with all features (run `npm run dev`)

**📦 [StackBlitz Setup](STACKBLITZ_SETUP.md)** - Step-by-step guide to create working StackBlitz demo

> **Quick Start**: Open `stackblitz-demo.html` in your browser for an immediate working demo!

### Demo Features

- **Interactive Chat**: Send and receive messages
- **Contact Management**: Add and manage contacts
- **Conversation Flow**: Create and switch between conversations
- **Media Messages**: Send images and videos
- **Real-time Updates**: See live message status changes

### Demo Code

```tsx
// Live demo example
import { useState } from "react";
import ChatMe from "chatme";

const DemoApp = () => {
  const [contacts, setContacts] = useState([
    {
      id: "demo-contact-1",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      phoneNumber: "+1234567890",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [conversations, setConversations] = useState([
    {
      id: "demo-conv-1",
      contactId: "demo-contact-1",
      lastMessage: "Hey! How are you doing?",
      lastMessageAt: new Date(),
      lastMessageId: "demo-msg-1",
      unreadCount: 2,
      lastMessageStatus: "DELIVERED",
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: "demo-msg-1",
      contactId: "demo-contact-1",
      conversationId: "demo-conv-1",
      content: "Hey! How are you doing?",
      senderId: "demo-contact-1",
      receiverId: "demo-user-1",
      direction: "INBOUND",
      currentStatus: "DELIVERED",
      statusHistory: [
        { status: "PENDING", at: new Date(Date.now() - 10000) },
        { status: "SENT", at: new Date(Date.now() - 8000) },
        { status: "DELIVERED", at: new Date(Date.now() - 5000) },
      ],
      isActive: true,
      createdAt: new Date(Date.now() - 10000),
    },
  ]);

  const handleMessageSent = (newMessage, conversationId) => {
    // Add the new message to the messages array
    setMessages((prev) => [
      ...prev,
      {
        ...newMessage,
        id: `msg-${Date.now()}`,
        createdAt: new Date(),
      },
    ]);

    // Update the conversation's last message
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              lastMessage: newMessage.content,
              lastMessageAt: new Date(),
              lastMessageId: `msg-${Date.now()}`,
              unreadCount: 0,
            }
          : conv
      )
    );
  };

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => console.log("Demo initialized")}
        onCreateNewConversation={(contact, conversation) => {
          console.log("Creating new conversation", { contact, conversation });
        }}
        onConversationSelect={(conversation) => {
          console.log("Selected conversation", conversation);
        }}
        onContactInfo={(contact) => {
          console.log("Contact info", contact);
        }}
        onDeleteConversation={(conversation) => {
          setConversations((prev) =>
            prev.filter((conv) => conv.id !== conversation.id)
          );
        }}
        onMessageSent={handleMessageSent}
      />
    </div>
  );
};

export default DemoApp;
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- TypeScript knowledge

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd chatme

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines

1. **Code Style**: Follow the existing code style and use Prettier
2. **Testing**: Add tests for new features
3. **Documentation**: Update documentation for API changes
4. **Type Safety**: Maintain TypeScript strict mode compliance

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔄 Changelog

### v1.0.0

- Initial release
- Core chat functionality
- TypeScript support
- Comprehensive testing
- Error handling
- Media message support

---

Made with ❤️ by Adise
