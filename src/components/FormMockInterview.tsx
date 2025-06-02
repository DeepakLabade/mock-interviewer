import { useAuth } from "@clerk/clerk-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { chatSession } from "@/scripts";
import { useInterviewContext } from "../context/InterviewContext"
import { QAItem } from "../context/InterviewContext";

// Ensure the environment variable is properly used
// const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const FormMockInterview = ({ initial }: any) => {
  const { setQaList } = useInterviewContext();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [aiResponse, setAiResponse] = useState(null);
  const { userId } = useAuth();
  const positionRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const experienceRef = useRef<HTMLInputElement | null>(null);
  const techstackRef = useRef<HTMLInputElement | null>(null);
  //@ts-ignore
  const newList = useRef();


  const cleanJsonResponse = (responseText: string) => {
    let cleanText = responseText.trim();
    cleanText = cleanText.replace(/(json|```|`)/g, "");
    const jsonArrayMatch = cleanText.match(/\[.*\]/s);
    if (jsonArrayMatch) {
      cleanText = jsonArrayMatch[0];
    } else {
      throw new Error("No JSON array found in response");
    }

    try {
      return JSON.parse(cleanText);
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };



  const generateAiResponse = async (data: any) => {
    const prompt = `
      As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

            [
              { "question": "<Question text>", "answer": "<Answer text>" },
              ...
            ]

            Job Information:
            - Job Position: ${data?.position}
            - Job Description: ${data?.description}
            - Years of Experience Required: ${data?.experience}
            - Tech Stacks: ${data?.techstack}

            The questions should assess skills in ${data?.techstack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
            `;

    try {
       const aiResult = await chatSession.sendMessage(prompt);
      const cleanedResponse = cleanJsonResponse(aiResult.response.text().trim());
      // console.log(cleanedResponse)
    // const cleanedResponse = aiResult
      newList.current = cleanedResponse;
      console.log(newList.current)
      //@ts-ignore
      setQaList(cleanedResponse);
    return cleanedResponse;
    } catch (err) {
      console.error("Error:", err);
      //@ts-ignore
      setAiResponse("An error occurred while generating response.");
    }
  };

  const handleReplace = () => {
    //@ts-ignore
    console.log("context set")
  };

  const onSubmit = async () => {
    const data = {
      position: positionRef.current?.value,
      description: descriptionRef.current?.value,
      experience: experienceRef.current?.value,
      techstack: techstackRef.current?.value,
    };

    try {
      setLoading(true);
      await generateAiResponse(data);
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg text-gray-200 font-semibold font-sans">
        Create a New Mock Interview
      </h2>

      <div className="w-full bg-[#171717] p8 rounded-lg flex flex-col items-start justify-start gap-6 shadow-md border-2 p-4 pt-8 mt-5 border-[#2E2F2F]">
        <div className="w-full space-y-4">
          <div className="w-full flex justify-between flex-col">
            <div className="mb-3">
              <p>Job Role / Job Position</p>
            </div>
            <div className="">
              <input
                ref={positionRef}
                type="text"
                className="h-12 border-1 rounded-md text-white border-[#2E2F2F] px-6 w-full"
                placeholder="e.g., Full Stack Developer"
              />
            </div>
          </div>

          <div className="w-full flex justify-between flex-col">
            <div className="mb-3">
              <p>Job Description</p>
            </div>
            <div className="">
              <textarea
                ref={descriptionRef}
                className="h-12 border-1 rounded-md border-[#2E2F2F] pt-2 pl-6 w-full"
                placeholder="Describe your job role..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between flex-col">
            <div className="mb-3">
              <p>Experience</p>
            </div>
            <div className="">
              <input
                type="number"
                ref={experienceRef}
                className="h-12 border-1 border-[#2E2F2F] rounded-md px-6 w-full"
                placeholder="e.g., 4"
              />
            </div>
          </div>

          <div className="w-full flex justify-between flex-col">
            <div className="mb-3">
              <p>Tech Stack</p>
            </div>
            <div className="">
              <input
                ref={techstackRef}
                type="text"
                className="h-12 border-1 border-[#2E2F2F] rounded-md px-6 w-full"
                placeholder="e.g., Full Stack Developer"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-end">
            <Button size={"sm"} variant={"secondary"} onClick={() => {
              onSubmit();
            }}>
              {loading ? "Loading..." : "Create"}
            </Button>
          </div>
        </div>
      </div>

      {aiResponse && (
        <div className="mt-5">
          <h3 className="font-semibold">AI Response:</h3>
          <pre>{aiResponse}</pre>
        </div>
      )}
    </div>
  );
};

export default FormMockInterview;
