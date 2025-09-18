import { Check, CheckCheck, Clock, X } from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";
import VideoWithLoader from "./VideoWithLoader";
import type { Message } from "@/config/types";
import { MessageStatus } from "@/config/enums";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isSent = message.direction === "outbound";
  const isReceived = message.direction === "inbound";
  const timestamp = message.createdAt;
  const mediaUrl = message.mediaUrl;
  const mediaType = message.mediaType;
  const formatTime = (timestamp: Date | string | undefined) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusIcon = () => {
    if (!isSent) return null;

    switch (message.currentStatus) {
      case MessageStatus.PENDING:
        return <Clock className="w-3 h-3 text-gray-400" />;
      case MessageStatus.SENT:
        return <Check className="w-3 h-3 text-gray-400" />;
      case MessageStatus.DELIVERED:
        return <CheckCheck className="w-3 h-3 text-blue-400" />;
      case MessageStatus.READ:
        return <CheckCheck className="w-3 h-3 text-green-400" />;
      case MessageStatus.FAILED:
        return <X className="w-3 h-3 text-red-400" />;
      default:
        return <Check className="w-3 h-3 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    if (!isSent) return "Received";

    switch (message.currentStatus) {
      case MessageStatus.PENDING:
        return "Pending";
      case MessageStatus.SENT:
        return "Sent";
      case MessageStatus.DELIVERED:
        return "Delivered";
      case MessageStatus.READ:
        return "Read";
      case MessageStatus.FAILED:
        return "Failed";
      default:
        return "Sent";
    }
  };

  return (
    <div className="flex flex-col gap-3 px-4 py-2">
      {isSent && (
        <div className="flex justify-end mb-2">
          <div className="relative flex-shrink-0" style={{ maxWidth: "75%" }}>
            <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-br-md shadow-md">
              {/* Media content */}
              {mediaUrl && mediaType && (
                <div className="mb-2">
                  {mediaType === "image" && (
                    <ImageWithLoader
                      src={mediaUrl}
                      alt="Message attachment"
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: "200px" }}
                    />
                  )}
                  {mediaType === "video" && (
                    <VideoWithLoader
                      src={mediaUrl}
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: "200px" }}
                    />
                  )}
                  {mediaType === "audio" && (
                    <audio src={mediaUrl} controls className="w-full" />
                  )}
                  {mediaType === "document" && (
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <a
                        href={mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm flex items-center"
                      >
                        📄 Document
                      </a>
                    </div>
                  )}
                </div>
              )}
              {/* Text content */}
              {message.content && (
                <p className="text-sm leading-relaxed break-words mb-0">
                  {message.content}
                </p>
              )}
            </div>
            <div className="flex justify-end mt-1 mr-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 min-w-[70px]">
                  {getStatusIcon()}
                  <span className="text-xs text-gray-400">
                    {getStatusText()}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  {formatTime(timestamp)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isReceived && (
        <div className="flex justify-start mb-2">
          <div className="relative flex-shrink-0" style={{ maxWidth: "75%" }}>
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-200">
              {/* Media content */}
              {mediaUrl && mediaType && (
                <div className="mb-2">
                  {mediaType === "image" && (
                    <ImageWithLoader
                      src={mediaUrl}
                      alt="Message attachment"
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: "200px" }}
                    />
                  )}
                  {mediaType === "video" && (
                    <VideoWithLoader
                      src={mediaUrl}
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: "200px" }}
                    />
                  )}
                  {mediaType === "audio" && (
                    <audio src={mediaUrl} controls className="w-full" />
                  )}
                  {mediaType === "document" && (
                    <div className="bg-gray-200 p-2 rounded-lg">
                      <a
                        href={mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 text-sm flex items-center"
                      >
                        📄 Document
                      </a>
                    </div>
                  )}
                </div>
              )}
              {/* Text content */}
              {message.content && (
                <p className="text-sm leading-relaxed break-words mb-0">
                  {message.content}
                </p>
              )}
            </div>
            <div className="flex justify-start mt-1 ml-1">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Received</span>
                <span className="text-xs text-gray-400">
                  {formatTime(timestamp)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
