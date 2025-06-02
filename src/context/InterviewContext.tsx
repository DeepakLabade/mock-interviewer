import React, { createContext, useContext, useState, ReactNode } from "react";

interface InterviewContextType {
  qaList: QAItem[];
  setQaList: (newList: QAItem[]) => void;
}

const InterviewContext = createContext<InterviewContextType | undefined>(
  undefined
);

export const InterviewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [qaList, setQaList] = useState<QAItem[]>([]);

  const replaceQAList = (newList: QAItem[]) => {
    setQaList(newList); // Completely replaces the old list
  };
  
  return (
    <InterviewContext.Provider value={{ qaList, setQaList: replaceQAList }}>
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterviewContext = (): InterviewContextType => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error(
      "useInterviewContext must be used within an InterviewProvider"
    );
  }
  return context;
};


export interface QAItem {
  question: string;
  answer: string;
}