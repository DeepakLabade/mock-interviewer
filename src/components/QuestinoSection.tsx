import { useInterviewContext } from '@/context/InterviewContext';
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import RecordAns from './RecordAns';

const QuestinoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isWebCam, setIsWebCam] = useState(false);
    const { qaList } = useInterviewContext();
    // const [questions, setQuestions] = useState<any>();

    // useEffect(() => {
    //     setQuestions(() => qaList)
    // })

    const [currentSpeech, setCurrentSpeech] =
      useState<SpeechSynthesisUtterance | null>(null);

    const handlePlayQuestion = (qst: string) => {
      if (isPlaying && currentSpeech) {
        // stop the speech if already playing
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setCurrentSpeech(null);
      } else {
        if ("speechSynthesis" in window) {
          const speech = new SpeechSynthesisUtterance(qst);
          window.speechSynthesis.speak(speech);
          setIsPlaying(true);
          setCurrentSpeech(speech);

          // handle the speech end
          speech.onend = () => {
            setIsPlaying(false);
            setCurrentSpeech(null);
          };
        }
      }
    };

    return (
      <div className="w-full min-h-96 border rounded-md p-4">
            <Tabs
          defaultValue={qaList[0]?.question}
          className="w-full space-y-12"
        >
          <TabsList className="bg-transparent w-full flex flex-wrap items-center justify-start gap-4">
            {qaList?.map((tab: any, i: any) => (
              <TabsTrigger
                className="data-[state=active]:bg-emerald-200 data-[state=active]:shadow-md text-xs px-2"
                    key={tab.question}
                    //@ts-ignore
                value={tab.question}
              >
                {`Question #${i + 1}`}
              </TabsTrigger>
            ))}
          </TabsList>

          {qaList?.map((tab:any, i:any) => (
            //@ts-ignore
            <TabsContent key={i} value={tab.question}>
              <p className="text-base text-left tracking-wide text-neutral-500">
                {tab.question}
              </p>

              <div className="w-full flex items-center justify-end">
                <div
                  content={isPlaying ? "Stop" : "Start"}
                //   icon={
                //     isPlaying ? (
                //       <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
                //     ) : (
                //       <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
                //     )
                //   }
                  onClick={() => handlePlayQuestion(tab.question)}
                />
              </div>

              <RecordAns
                question={tab}
                isWebCam={isWebCam}
                setIsWebCam={setIsWebCam}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
}

export default QuestinoSection