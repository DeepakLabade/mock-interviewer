import { cn } from "@/lib/utils"

interface containerProps {
    children: React.ReactNode
    className?: string
}

export const Container = ({children, className}: containerProps) => {
    return (
        <div className={cn("container mx-auto px-4 py-4 md:px-8 w-full", className)}>
            {children} 
        </div>
    )
}