import Container from "../container";
import Logo from "../logo/logo";

export default function Header () {
  return (
    <Container type={`header`}>
      <div className="flex items-center w-full p-4 h-14 bg-background max-w-7xl">
        <Logo />
      </div>
    </Container>
  )
}