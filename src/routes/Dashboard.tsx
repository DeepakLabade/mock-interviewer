import Headings from '@/components/headings'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className='flex w-full items-center justify-between'>
      <Headings title='Dashboard' description='Create and start you AI Interview' />

      <Link to={"/generate/create"}>
        <Button size={"sm"} variant={'secondary'}>
            <Plus /> Add New 
        </Button>
      </Link>
    </div>
  )
}

export default Dashboard
