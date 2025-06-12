import { Container } from "@/components/container";
import { ArrowRight, GaugeCircle, ListChecks, UserCog } from "lucide-react";

export function Home() {
  return (
    <div>
      <div className="relative w-full overflow-hidden min-h-[120vh] bg-pattern">
        {/* Blurred circle in center */}
        <div className="absolute top-1/2 left-1/2 w-[550px] h-[500px] -translate-x-1/2 -translate-y-3/4 bg-blue-300 opacity-40 rounded-full blur-3xl z-10"></div>

        {/* Content above everything */}
        <div className="relative z-20 flex pt-20 justify-center h-full">
          <Container>
            <div>
              <div className="text-center flex items-center flex-col">
                <h1 className="font-bold text-6xl">
                  AI-Powered Interview preperation
                </h1>
                <p className="text-2xl pt-7">
                  Practice with an Interview Simulator
                </p>
                <p className="text-xl text-center w-[900px] pt-5">
                  Prepare for top tech interviews with our intelligent AI mock
                  interviewer. Tackle DSA challenges, get instant performance
                  insights, and build confidence for FAANG/MAANG roles through
                  customized coaching that mirrors real interview scenarios.
                </p>

                <button className="px-10 py-4 shadow-2xl font-semibold bg-sky-300 rounded-xl text-xl flex gap-3 justify-center items-center mt-10">
                  Get Started
                  <ArrowRight strokeWidth={2} className="inline" />
                </button>
              </div>

              <div>
                <div className="text-center pt-40">
                  <div>
                    <h1 className="text-5xl font-medium ">
                      Master Technical Interview
                    </h1>
                    <p className="text-m pt-5">
                      Advanced practice tools and AI interview simulation
                      designed to help you excel at Technical interviews.
                    </p>
                  </div>

                  <div className="flex gap-8 mx-20 mt-14">
                    <div className="flex-1 bg-slate-200 min-h-84 rounded-xl border border-slate-300 p-10">
                      <div className="flex flex-col justify-center items-center gap-10">
                        <div className="p-3 bg-white rounded-full flex w-12">
                          <ListChecks className="text-indigo-500" />
                        </div>
                        <div>
                          <h1 className="text-m font-semibold">
                            Structured Technical Questions
                          </h1>
                          <p className="pt-3">
                            Tackle a wide range of core topics including data
                            structures, algorithms, system design, and databases
                            with progressively challenging questions curated by
                            industry experts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-200 min-h-84 rounded-xl border border-slate-300 p-10">
                      <div className="flex flex-col justify-center items-center gap-10">
                        <div className="p-3 bg-white rounded-full flex w-12">
                          <UserCog className="text-green-500" />
                        </div>
                        <div>
                          <h1 className="text-m font-semibold">
                            Role-Specific Preparation
                          </h1>
                          <p className="pt-3">
                            Practice interview questions tailored to your target
                            role—whether it's frontend, backend, full stack, or
                            data science—mirroring real-world technical
                            interview formats.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-200 min-h-84 rounded-xl border border-slate-300 p-10">
                      <div className="flex flex-col justify-center items-center gap-10">
                        <div className="p-3 bg-white rounded-full flex w-12">
                          <GaugeCircle className="text-blue-500" />
                        </div>
                        <div>
                          <h1 className="text-m font-semibold">
                            Real-Time Skill Assessment
                          </h1>
                          <p className="pt-3">
                            Receive immediate evaluation of your solutions with
                            feedback on correctness, efficiency, and coding
                            style, helping you continuously improve and track
                            your interview readiness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
