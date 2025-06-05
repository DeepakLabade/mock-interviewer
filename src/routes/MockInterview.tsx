// import React, { useState } from 'react'
// import Webcam from 'react-webcam';
// import { Link, useNavigate } from 'react-router-dom';
// import LoaderPage from './LoaderPage';
// import { Lightbulb, WebcamIcon } from 'lucide-react';

// const MockInterview = () => {

//   const [ interview, setInterview ] = useState();
//   const [isloading, setIsLoading] = useState(false);
//   const [ isWebCamEnabled, setIsWebCamEnabled ] = useState(false);

//   const navigate = useNavigate();

//   if (isloading) {
//     return <LoaderPage />
//   }

//   return (
//     <div className="flex flex-col w-full gap-8 py-5">
//       <div className="flex  items-center justify-between w-full gap-2">
//         {/* <div className="w-full bg-sky-100 border border-sky-200 p-4 rounded-lg flex items-start gap-3">
//           <Lightbulb className="h-5 w-5 text-sky-600" />
//           <div>
//             <p className="text-sky-600 font-semibold">Important Node</p>
//             <p className="text-sm text-sky-700 mt-1 leading-relaxed">
//               Press "Record Answer" to begin answering the question. Once you
//               finish the interview, you&apos;ll receive feedback comparing your
//               responses with the ideal answers.
//               <br />
//               <br />
//               <strong>Note:</strong>{" "}
//               <span className="font-medium">Your video is never recorded.</span>{" "}
//               You can disable the webcam anytime if preferred.
//             </p>
//           </div>
//         </div> */}
//       </div>

//       {/* {interview && <InterviewPin interview={interview} onMockPage />} */}

//       <div className="flex items-center justify-center w-full h-full">
//         <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
//           {isWebCamEnabled ? (
//             //@ts-ignore
//             <Webcam
//               onUserMedia={() => setIsWebCamEnabled(true)}
//               onUserMediaError={() => setIsWebCamEnabled(false)}
//               className="w-full h-full object-cover rounded-md"
//             />
//           ) : (
//             <WebcamIcon className="min-w-24 min-h-24 text-muted-foreground" />
//           )}
//         </div>
//       </div>

//       <div className="flex items-center justify-center">
//         <button
//           className="bg-red-300"
//           onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}
//         >
//           {isWebCamEnabled ? "Disable Webcam" : "Enable Webcam"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MockInterview

import QuestinoSection from "@/components/QuestinoSection";
import { useInterviewContext } from "../context/InterviewContext";

const MockInterview = () => {
  const { qaList } = useInterviewContext();
  console.log("Stored QA List in context:", qaList);

  return (
    <QuestinoSection />
    // <div className="mt-6">
    //   <h2 className="text-lg text-white">Current Stored QA:</h2>
    //   <pre className="text-white bg-gray-800 p-4 rounded">
    //     {JSON.stringify(qaList, null, 2)}
    //   </pre>
    // </div>
  );
};

export default MockInterview;
