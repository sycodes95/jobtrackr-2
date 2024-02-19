import HeroStartButton from './heroStartButton';
import HeroGithubButton from './heroGithubButton';

export default function Hero () {

  const title = (
    <>
      <span className="text-5xl md:text-6xl text-coral text-center glow-text-pink">Tracking your job applications</span>
      <span className="text-5xl md:text-6xl text-jet text-center glow-text-black border-b border-zinc-300">made simple. </span>
    </>
  )

  const description = (<span className="text-center text-zinc-600">
    Extremely simple web application to keep track of your job applications. 
    Use data visualization tools to improve your job hunting strategies.
  </span>)

  
  return (
    <div className="flex flex-col h-fit items-center gap-6 w-full p-4 pt-16 pb-16">

      <div className=" relative h-fit ">
        <HeroGithubButton />
      </div>

      <h1 className="flex flex-col items-center  font-inter-tight-display md:text-4xl">
        {title}
      </h1>

      <div className="flex text-sm max-w-[55%] ">
        {description}
      </div>

      <div className="relative overflow-hidden h-fit rounded-lg group">
        <HeroStartButton />
      </div>

    </div>
  )
}