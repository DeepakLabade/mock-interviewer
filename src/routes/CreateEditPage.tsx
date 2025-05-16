import FormMockInterview from '@/components/FormMockInterview'
import { Interview } from '@/types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CreateEditPage = () => {

  const {interviewId} = useParams<{interviewId: string}>()
  const [interview, setInterview] = useState<Interview | null>(null)

  useEffect(() => {
    const fetchInterview = async () => {
      if (interviewId) {
        try {
          // const interviewDoc = await getDoc(doc(db, "interviews", interviewId))
          // if (interviewDoc) {
          //   setInterview({...interviewDoc.data()})
          // }
        } catch (error) {
          console.log(error)
        }

        fetchInterview()
      }
    }
  }, [interviewId])

  return (
    <div className='text-white'>
      <FormMockInterview intial={interview} />
    </div>
  )
}
