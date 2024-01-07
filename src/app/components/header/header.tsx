import Container from "../container";
import Logo from "../logo/logo";
import UserProfile from "../user/userProfile";
import HeaderContainer from "./headerContainer";
import HeaderRoutes from "./headerRoutes";
import { ModeToggle } from "./modeToggle";

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header ( { isAuthenticated } : HeaderProps ) {
  return (
    <Container type={`header`}>
      <HeaderContainer className="flex items-center justify-between w-full p-4 h-14 bg-background max-w-7xl">

        <div id="header-left" className="flex items-center gap-6">
          <Logo />
          {
          isAuthenticated &&
          <HeaderRoutes />
          }
        </div>

        <div id="header-right" className="flex items-center gap-4">
          {
          isAuthenticated ?
          <UserProfile />
          :
          <a className="text-xs text-orange-500 p-2 rounded-lg border border-orange-500" href="/api/auth/login">Login / Signup</a>
          }
          <ModeToggle />
        </div>

      </HeaderContainer>
    </Container>
  )
}