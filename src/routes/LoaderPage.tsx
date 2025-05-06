import { cn } from '@/lib/utils'

const LoaderPage = ({className}: {className?: string}) => {
  return (
    <div className={cn(
        "w-screen h-screen flex justify-center items-center bg-transparent z-50", className
    )}>
      Loading...
    </div>
  )
}

export default LoaderPage
