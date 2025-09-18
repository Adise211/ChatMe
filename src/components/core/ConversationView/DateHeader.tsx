import React from "react";

interface DateHeaderProps {
  date: string;
}

const DateHeader = ({ date }: DateHeaderProps) => {
  const formatDate = (date: string): string => {
    const messageDate = new Date(date);
    return messageDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex justify-center my-4">
      <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        {formatDate(date)}
      </div>
    </div>
  );
};

export default DateHeader;
