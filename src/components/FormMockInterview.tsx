import { useAuth } from "@clerk/clerk-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { Button } from "./ui/button"

// const formSchema = z.object({
//   position: z.string().min(1).max(100),
//   description: z.string().min(10),
//   experience: z.number(),
//   techstack: z.string().min(1)
// })

// type formData = z.infer<typeof formSchema>

const FormMockInterview = ({ initial }: any) => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { userId } = useAuth()
  
  const onsubmit = async () => {
    try {
      setLoading(true)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div>
      <h2 className="text-lg text-gray-800 font-semibold font-sans">
        create a new mock interview
      </h2>

      <div className="w-full p8 rounded-lg flex flex-col items-start justify-start gap-6 shadow-md border-2 p-4 pt-8  mt-5">
        <div className="w-full space-y-4">
          <div className="w-full flex justify-between flex-col ">
            <div className="mb-3">
              <p>Job Role / Job Position</p>
            </div>
            <div className="">
              <input
                type="text"
                className="h-12 border-1 rounded-md px-6 w-full"
                placeholder="eg:- Full Stack developer"
              />
            </div>
          </div>

          <div className="w-full flex justify-between flex-col ">
            <div className="mb-3">
              <p>Job Description</p>
            </div>
            <div className="">
              <textarea
                className="h-12 border-1 rounded-md pt-2 pl-6 w-full"
                placeholder="describe your job role..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between flex-col ">
            <div className="mb-3">
              <p>experience</p>
            </div>
            <div className="">
              <input
                type="Number"
                className="h-12 border-1 rounded-md px-6 w-full"
                placeholder="eg:- 4"
              />
            </div>
          </div>

          <div className="w-full flex justify-between flex-col ">
            <div className="mb-3">
              <p>techstack</p>
            </div>
            <div className="">
              <input
                type="text"
                className="h-12 border-1 rounded-md px-6 w-full"
                placeholder="eg:- Full Stack developer"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-end">
            <Button size={"sm"} variant={'outline'} >
              create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormMockInterview