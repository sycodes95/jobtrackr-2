import Container from "../container";
import Logo from "../logo/logo";
import HeaderContainer from "./headerContainer";
import HeaderRoutes from "./headerRoutes";
import { ModeToggle } from "./modeToggle";

export default function Header () {
  return (
    <Container type={`header`}>
      <HeaderContainer className="flex items-center justify-between w-full p-4 h-14 bg-background max-w-7xl">

        <div id="header-left" className="flex items-center gap-6">
          <Logo />
          <HeaderRoutes />
        </div>

        <div id="header-right" className="flex items-center gap-4">
          <ModeToggle />
        </div>

      </HeaderContainer>
    </Container>
  )
}