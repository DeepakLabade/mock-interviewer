import { MainRoutes } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"

interface navigationRoutesProps {
    isMobile?: boolean
}

const NavigationRoutes = ({isMobile = false}: navigationRoutesProps) => {
  return (
    <ul className={cn("flex items-center gap-6 ")}>
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) =>
            cn(
              "text-base font-medium",
              isActive && "text-[#6D28D9] font-semibold"
            )
          }
        >
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
}

export default NavigationRoutes
