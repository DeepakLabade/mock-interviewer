import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface QAItem {
  question: string;
  answer: string;
}

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
  // Load initial qaList from localStorage if present, else empty array
  const [qaList, setQaList] = useState<QAItem[]>(() => {
    try {
      const saved = localStorage.getItem("qaList");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse qaList from localStorage:", error);
      return [];
    }
  });

  // Whenever qaList changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem("qaList", JSON.stringify(qaList));
  }, [qaList]);

  // Function to replace the qaList completely
  const replaceQAList = (newList: QAItem[]) => {
    setQaList(newList);
  };

  return (
    <InterviewContext.Provider value={{ qaList, setQaList: replaceQAList }}>
      {children}
    </InterviewContext.Provider>
  );
};

// Custom hook to use the InterviewContext easily
export const useInterviewContext = (): InterviewContextType => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error(
      "useInterviewContext must be used within an InterviewProvider"
    );
  }
  return context;
};
