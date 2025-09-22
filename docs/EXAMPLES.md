# ChatMe Examples

This document provides various examples and usage patterns for the ChatMe chat application.

## Basic Usage

### Simple Chat Implementation

The ChatMe app comes with a complete chat interface out of the box. Here's how the main components work together:

```tsx
// src/App.tsx
import React from "react";
import ChatMe from "./components/ChatMe";
import { useChatStore } from "./store";

const App = () => {
  const { contacts, conversations, messages } = useChatStore();

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => console.log("Chat initialized")}
        onCreateNewConversation={(contact, conversation) => {
          console.log("New conversation:", { contact, conversation });
        }}
        onConversationSelect={(conversation) => {
          console.log("Selected:", conversation);
        }}
        onContactInfo={(contact) => {
          console.log("Contact info:", contact);
        }}
        onDeleteConversation={(conversation) => {
          console.log("Deleted:", conversation);
        }}
        onMessageSent={(message, conversationId) => {
          console.log("Message sent:", { message, conversationId });
        }}
      />
    </div>
  );
};

export default App;
```

## Advanced Usage

### Real-time Chat with WebSocket

Here's how you can integrate real-time messaging with WebSocket:

```tsx
import React, { useState, useEffect, useCallback } from "react";
import { useChatStore } from "./store";
import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "./config/types";
import { MessageDirection, MessageStatus } from "./config/enums";

const RealTimeChat = () => {
  const { contacts, conversations, messages, setMessages, setConversations } =
    useChatStore();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket("ws://localhost:8080/chat");

    ws.onopen = () => {
      console.log("WebSocket connected");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case "NEW_MESSAGE":
          setMessages((prev) => [...prev, data.message]);
          // Update conversation's last message
          setConversations((prev) =>
            prev.map((conv) =>
              conv.id === data.message.conversationId
                ? {
                    ...conv,
                    lastMessage: data.message.content,
                    lastMessageAt: new Date(),
                    lastMessageId: data.message.id,
                    unreadCount:
                      conv.id === data.message.conversationId
                        ? conv.unreadCount + 1
                        : conv.unreadCount,
                  }
                : conv
            )
          );
          break;

        case "MESSAGE_STATUS_UPDATE":
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === data.messageId
                ? { ...msg, currentStatus: data.status }
                : msg
            )
          );
          break;

        case "NEW_CONVERSATION":
          setConversations((prev) => [data.conversation, ...prev]);
          break;
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setSocket(null);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleMessageSent = useCallback(
    (newMessage: NewMessage, conversationId: string) => {
      if (socket) {
        // Send message via WebSocket
        socket.send(
          JSON.stringify({
            type: "SEND_MESSAGE",
            message: newMessage,
            conversationId,
          })
        );
      }
    },
    [socket]
  );

  const handleCreateNewConversation = useCallback(
    (contact: Contact, conversation: Conversation) => {
      if (socket) {
        socket.send(
          JSON.stringify({
            type: "CREATE_CONVERSATION",
            contact,
            conversation,
          })
        );
      }
    },
    [socket]
  );

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => {
          // Load initial data
          fetchContacts();
          fetchConversations();
          fetchMessages();
        }}
        onCreateNewConversation={handleCreateNewConversation}
        onConversationSelect={(conversation) => {
          // Mark conversation as read
          if (socket) {
            socket.send(
              JSON.stringify({
                type: "MARK_AS_READ",
                conversationId: conversation.id,
              })
            );
          }
        }}
        onContactInfo={(contact) => {
          // Show contact details modal
          showContactModal(contact);
        }}
        onDeleteConversation={(conversation) => {
          if (socket) {
            socket.send(
              JSON.stringify({
                type: "DELETE_CONVERSATION",
                conversationId: conversation.id,
              })
            );
          }
        }}
        onMessageSent={handleMessageSent}
      />
    </div>
  );
};
```

### Chat with Media Support

Here's how to handle media messages:

```tsx
import React, { useState } from "react";
import { useChatStore } from "./store";
import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "./config/types";
import { MessageDirection, MessageStatus } from "./config/enums";

const MediaChat = () => {
  const { contacts, conversations, messages, setMessages, setConversations } =
    useChatStore();

  const handleMessageSent = (
    newMessage: NewMessage,
    conversationId: string
  ) => {
    // Handle file uploads
    if (newMessage.mediaUrl) {
      uploadFile(newMessage.mediaUrl).then((uploadedUrl) => {
        const messageWithMedia: Message = {
          ...newMessage,
          id: `msg-${Date.now()}`,
          mediaUrl: uploadedUrl,
          createdAt: new Date(),
          statusHistory: [{ status: MessageStatus.PENDING, at: new Date() }],
        };

        setMessages((prev) => [...prev, messageWithMedia]);
      });
    } else {
      // Regular text message
      const message: Message = {
        ...newMessage,
        id: `msg-${Date.now()}`,
        createdAt: new Date(),
        statusHistory: [{ status: MessageStatus.PENDING, at: new Date() }],
      };

      setMessages((prev) => [...prev, message]);
    }

    // Update conversation
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              lastMessage: newMessage.content || "[Media]",
              lastMessageAt: new Date(),
              lastMessageId: `msg-${Date.now()}`,
              unreadCount: 0,
              updatedAt: new Date(),
            }
          : conv
      )
    );
  };

  const uploadFile = async (fileUrl: string): Promise<string> => {
    // Simulate file upload
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://uploaded-files.example.com/${Date.now()}`);
      }, 1000);
    });
  };

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => console.log("Media chat initialized")}
        onCreateNewConversation={(contact, conversation) => {
          console.log("New conversation with media support");
        }}
        onConversationSelect={(conversation) => {
          console.log("Selected conversation:", conversation);
        }}
        onContactInfo={(contact) => {
          console.log("Contact info:", contact);
        }}
        onDeleteConversation={(conversation) => {
          console.log("Deleted conversation:", conversation);
        }}
        onMessageSent={handleMessageSent}
      />
    </div>
  );
};
```

## Customization Examples

### Custom Styling

You can customize the chat appearance by overriding CSS classes:

```css
/* src/styles/custom-chat.css */
.custom-chat-container {
  @apply bg-gradient-to-br from-blue-50 to-indigo-100;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.custom-chat-container .conversation-list {
  @apply bg-white/80 backdrop-blur-sm;
  border-right: 1px solid rgba(59, 130, 246, 0.1);
}

.custom-chat-container .message-bubble {
  @apply rounded-2xl px-4 py-2 max-w-xs;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.custom-chat-container .message-bubble.inbound {
  @apply bg-gradient-to-r from-blue-500 to-blue-600 text-white;
}

.custom-chat-container .message-bubble.outbound {
  @apply bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800;
}
```

### Theme Integration

```tsx
import React, { createContext, useContext } from "react";
import ChatMe from "./components/ChatMe";
import { useChatStore } from "./store";

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

const ThemeContext = createContext<ThemeContextType>({
  primaryColor: "blue",
  secondaryColor: "gray",
  backgroundColor: "white",
});

const ThemedChat = () => {
  const theme = useContext(ThemeContext);
  const { contacts, conversations, messages } = useChatStore();

  const customStyles = {
    "--chat-primary": theme.primaryColor,
    "--chat-secondary": theme.secondaryColor,
    "--chat-background": theme.backgroundColor,
  } as React.CSSProperties;

  return (
    <div style={customStyles} className="themed-chat">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => {}}
        onCreateNewConversation={() => {}}
        onConversationSelect={() => {}}
        onContactInfo={() => {}}
        onDeleteConversation={() => {}}
        onMessageSent={() => {}}
      />
    </div>
  );
};
```

## Integration Examples

### React Router Integration

```tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ChatMe from "./components/ChatMe";
import { useChatStore } from "./store";

const ChatPage = () => {
  const { conversationId } = useParams();
  const { contacts, conversations, messages } = useChatStore();

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => {
          // Load conversation data based on URL
          if (conversationId) {
            loadConversation(conversationId);
          }
        }}
        onCreateNewConversation={() => {}}
        onConversationSelect={(conversation) => {
          // Navigate to conversation URL
          navigate(`/chat/${conversation.id}`);
        }}
        onContactInfo={() => {}}
        onDeleteConversation={() => {}}
        onMessageSent={() => {}}
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:conversationId?" element={<ChatPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
```

## Testing Examples

### Unit Test Example

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ChatMe from "../components/ChatMe";
import {
  mockContacts,
  mockConversations,
  mockMessages,
} from "../tests/mock-data";

describe("ChatMe Component", () => {
  it("should render chat interface", () => {
    const mockHandlers = {
      onInit: vi.fn(),
      onCreateNewConversation: vi.fn(),
      onConversationSelect: vi.fn(),
      onContactInfo: vi.fn(),
      onDeleteConversation: vi.fn(),
      onMessageSent: vi.fn(),
    };

    render(
      <ChatMe
        contacts={mockContacts}
        conversations={mockConversations}
        messages={mockMessages}
        {...mockHandlers}
      />
    );

    expect(screen.getByText("Conversations")).toBeInTheDocument();
    expect(mockHandlers.onInit).toHaveBeenCalledTimes(1);
  });

  it("should handle conversation selection", () => {
    const mockOnConversationSelect = vi.fn();

    render(
      <ChatMe
        contacts={mockContacts}
        conversations={mockConversations}
        messages={mockMessages}
        onInit={() => {}}
        onCreateNewConversation={() => {}}
        onConversationSelect={mockOnConversationSelect}
        onContactInfo={() => {}}
        onDeleteConversation={() => {}}
        onMessageSent={() => {}}
      />
    );

    const conversationItem = screen.getByTestId("conversation-item-1");
    fireEvent.click(conversationItem);

    expect(mockOnConversationSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "conv-1" })
    );
  });
});
```

## Performance Optimization

### Memoized Chat Component

```tsx
import React, { memo, useMemo, useCallback } from "react";
import ChatMe from "./components/ChatMe";
import { useChatStore } from "./store";

const OptimizedChat = memo(() => {
  const { contacts, conversations, messages } = useChatStore();

  const memoizedContacts = useMemo(() => contacts, [contacts]);
  const memoizedConversations = useMemo(() => conversations, [conversations]);
  const memoizedMessages = useMemo(() => messages, [messages]);

  const handleMessageSent = useCallback((message, conversationId) => {
    // Optimized message handling
    sendMessageOptimized(message, conversationId);
  }, []);

  const handleConversationSelect = useCallback((conversation) => {
    // Optimized conversation selection
    selectConversationOptimized(conversation);
  }, []);

  return (
    <ChatMe
      contacts={memoizedContacts}
      conversations={memoizedConversations}
      messages={memoizedMessages}
      onInit={() => {}}
      onCreateNewConversation={() => {}}
      onConversationSelect={handleConversationSelect}
      onContactInfo={() => {}}
      onDeleteConversation={() => {}}
      onMessageSent={handleMessageSent}
    />
  );
});

OptimizedChat.displayName = "OptimizedChat";
```

These examples demonstrate various ways to use and customize the ChatMe chat application for different use cases and requirements.
