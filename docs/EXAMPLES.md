# ChatMe Examples

This document provides various examples and usage patterns for the ChatMe UI library.

## Basic Usage

### Simple Chat Implementation

```tsx
import React, { useState } from "react";
import ChatMe from "chatme";
import type { Contact, Conversation, Message } from "chatme";

const SimpleChat = () => {
  const [contacts] = useState<Contact[]>([
    {
      id: "contact-1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "+1234567890",
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [conversations] = useState<Conversation[]>([
    {
      id: "conv-1",
      contactId: "contact-1",
      lastMessage: "Hello!",
      lastMessageAt: new Date(),
      lastMessageId: "msg-1",
      unreadCount: 0,
      lastMessageStatus: "READ",
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [messages] = useState<Message[]>([
    {
      id: "msg-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      content: "Hello!",
      senderId: "contact-1",
      receiverId: "user-1",
      direction: "INBOUND",
      currentStatus: "READ",
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    },
  ]);

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
```

## Advanced Usage

### Real-time Chat with WebSocket

```tsx
import React, { useState, useEffect, useCallback } from "react";
import ChatMe from "chatme";
import type { Contact, Conversation, Message, NewMessage } from "chatme";
import { MessageDirection, MessageStatus } from "chatme";

const RealTimeChat = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
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

```tsx
import React, { useState } from "react";
import ChatMe from "chatme";
import type { Contact, Conversation, Message, NewMessage } from "chatme";
import { MessageDirection, MessageStatus } from "chatme";

const MediaChat = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "contact-1",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      phoneNumber: "+1234567890",
      avatarUrl: "https://example.com/avatar.jpg",
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "conv-1",
      contactId: "contact-1",
      lastMessage: "Check out this image!",
      lastMessageAt: new Date(),
      lastMessageId: "msg-2",
      unreadCount: 0,
      lastMessageStatus: MessageStatus.READ,
      isActive: true,
      createdAt: new Date(),
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      contactId: "contact-1",
      conversationId: "conv-1",
      content: "Hey! How are you?",
      senderId: "contact-1",
      receiverId: "user-1",
      direction: MessageDirection.INBOUND,
      currentStatus: MessageStatus.READ,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(Date.now() - 60000),
    },
    {
      id: "msg-2",
      contactId: "contact-1",
      conversationId: "conv-1",
      content: "Check out this image!",
      senderId: "contact-1",
      receiverId: "user-1",
      mediaType: "image/jpeg",
      mediaUrl: "https://example.com/image.jpg",
      direction: MessageDirection.INBOUND,
      currentStatus: MessageStatus.READ,
      statusHistory: [],
      isActive: true,
      createdAt: new Date(),
    },
  ]);

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

```tsx
import React from "react";
import ChatMe from "chatme";
import "./custom-chat.css";

const CustomStyledChat = () => {
  return (
    <div className="custom-chat-container">
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

```css
/* custom-chat.css */
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
import ChatMe from "chatme";

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
import ChatMe from "chatme";

const ChatPage = () => {
  const { conversationId } = useParams();

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

### Redux Integration

```tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatMe from "chatme";
import {
  selectContacts,
  selectConversations,
  selectMessages,
  sendMessage,
  selectConversation,
  deleteConversation,
} from "./chatSlice";

const ReduxChat = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const conversations = useSelector(selectConversations);
  const messages = useSelector(selectMessages);

  return (
    <div className="h-screen">
      <ChatMe
        contacts={contacts}
        conversations={conversations}
        messages={messages}
        onInit={() => {
          dispatch(loadInitialData());
        }}
        onCreateNewConversation={(contact, conversation) => {
          dispatch(createConversation({ contact, conversation }));
        }}
        onConversationSelect={(conversation) => {
          dispatch(selectConversation(conversation.id));
        }}
        onContactInfo={(contact) => {
          dispatch(showContactInfo(contact.id));
        }}
        onDeleteConversation={(conversation) => {
          dispatch(deleteConversation(conversation.id));
        }}
        onMessageSent={(message, conversationId) => {
          dispatch(sendMessage({ message, conversationId }));
        }}
      />
    </div>
  );
};
```

## Testing Examples

### Unit Test Example

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ChatMe from "chatme";
import { mockContacts, mockConversations, mockMessages } from "./test-data";

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
import ChatMe from "chatme";

const OptimizedChat = memo(({ contacts, conversations, messages }) => {
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

These examples demonstrate various ways to integrate and customize the ChatMe UI library for different use cases and requirements.
