import React, { createContext, useContext, useEffect, useState } from "react";

type Feedback = {
  ratings: number;
  feedback: string;
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
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(() => {
    const stored = localStorage.getItem("feedbackList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
  }, [feedbackList]);

  const addFeedback = (feedback: Feedback) => {
    setFeedbackList((prev) => [...prev, feedback]);
  };

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
