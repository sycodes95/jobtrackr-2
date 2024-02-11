import Container from "../container";
import Logo from "../logo/logo";
import MobileMenu from "../mobileMenu/mobileMenu";
import UserProfile from "../user/userProfile";
import HeaderContainer from "./headerContainer";
import AppRoutes from "./appRoutes";
import LoginButton from "./loginButton";
import { ModeToggle } from "./modeToggle";

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header ( { isAuthenticated } : HeaderProps ) {

  return (
    <Container type={`header`}>
      <HeaderContainer className="flex items-center justify-between w-full p-4 h-14 bg-background max-w-7xl">

        <div id="header-left" className={`flex items-center gap-6`}>
          <Logo />
          {
          isAuthenticated &&
          <AppRoutes className={`hidden md:flex items-center gap-6`} />
          }
        </div>

        <div id="header-right" className="flex items-center gap-4">
          {
          isAuthenticated ?
          <>
          <MobileMenu />
          <UserProfile />
          <ModeToggle />
          </>
          :
          <LoginButton />
          }
        </div>

      </HeaderContainer>
    </Container>
  )
}