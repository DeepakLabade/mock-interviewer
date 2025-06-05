import React, { createContext, useContext, useEffect, useState } from "react";

// Updated type with `question` field
type Feedback = {
  ratings: number;
  feedback: string;
  question: string; // New field added here
};

interface FeedbackContextType {
  feedbackList: Feedback[];
  addFeedback: (feedback: Feedback) => void;
  clearFeedbackList: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Load feedback list from localStorage on initial render
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(() => {
    const stored = localStorage.getItem("feedbackList");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist feedback list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
  }, [feedbackList]);

  // Add new feedback item to the list
  const addFeedback = (feedback: Feedback) => {
    setFeedbackList((prev) => [...prev, feedback]);
  };

  // Clear all feedback items
  const clearFeedbackList = () => {
    setFeedbackList([]);
  };

  return (
    <FeedbackContext.Provider
      value={{ feedbackList, addFeedback, clearFeedbackList }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error(
      "useFeedbackContext must be used within a FeedbackProvider"
    );
  }
  return context;
};
