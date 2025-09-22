# ChatMe

A modern, responsive React chat application built with TypeScript, Tailwind CSS, and Radix UI components. ChatMe provides a complete chat experience with conversation management, message handling, and contact integration.

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

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Zustand** - Lightweight state management
- **Zod** - Schema validation
- **Vite** - Fast build tool and dev server
- **Vitest** - Testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Adise211/chatme.git
cd chatme
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Usage

### Basic Chat Interface

The app provides a complete chat interface with:

- **Conversation List**: Left sidebar showing all conversations
- **Message View**: Main area displaying messages and input
- **Contact Management**: Add and manage contacts
- **Media Messages**: Send and receive images/videos
- **Message Status**: Track message delivery and read status

### Key Components

- **ChatMe**: Main container component
- **ConversationList**: Left sidebar with conversation list
- **ConversationView**: Right panel with message display and input
- **MessageBubble**: Individual message component
- **MessageInput**: Message composition area

## 🏗️ Architecture

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

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines

1. **Code Style**: Follow the existing code style and use Prettier
2. **Testing**: Add tests for new features
3. **Documentation**: Update documentation for API changes
4. **Type Safety**: Maintain TypeScript strict mode compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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
