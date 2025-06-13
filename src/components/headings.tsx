import { cn } from "@/lib/utils"

interface HeadingsProps {
    title: string,
    description?: string,
    isSubHeading?: string
}

const Headings = ({title, description, isSubHeading}: HeadingsProps) => {
  return (
    <div>
      <h2 className={cn("text-2xl md:text-3xl font-semibold font-sans", isSubHeading && "text-lg")}>
        {title}
      </h2>
      {description && (
        <p className="text-sm text-gray-700">{description}</p>
      )}
    </div>
  )
}

export default Headings
