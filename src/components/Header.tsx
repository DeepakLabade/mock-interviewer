import { useAuth } from "@clerk/clerk-react"
import { Container } from "./container"
import { cn } from "@/lib/utils"
import NavigationRoutes from "./NavigationRoutes"
import { NavLink } from "react-router-dom"
import ProfileContainer from "./ProfileContainer"

const Header = () => {

  const {userId} = useAuth()

  return (
    <header
      className={cn(
        "w-full border-b duration-150 transition-all ease-in-out flex bg-[#0A0A0A] border-slate-800"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 w-full justify-center">
          {/* <LogoContainer /> */}

          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />

            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-white",
                    isActive && "text-[#6D28D9] font-semibold"
                  )
                }
              >
                take an interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            <ProfileContainer />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header
