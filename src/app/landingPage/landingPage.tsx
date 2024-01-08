import { useTheme } from "next-themes";
import Container from "../components/container";
import PageContainer from "../components/pageContainer";
import Background from "./components/background";
import Hero from "./components/hero";


export default function LandingPage () {
  const theme = useTheme()
  
  return (
    <>
      <Background className={`absolute ${`landing-page-background` }  top-0 left-0 h-32 bg-background w-full z-0`} />
      <PageContainer>
        <div className="flex flex-col items-center w-full h-full grow ">
          <Hero />
        </div>
      </PageContainer>

    </>
    
  )
}