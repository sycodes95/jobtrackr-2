import Background from "./background";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Hero () {
  return (
    <div className="flex flex-col h-fit items-center pt-28 gap-6  w-full">

      <div className=" relative h-fit ">
        <div className="relative h-[24px] bg-white rounded-full z-20 group">
          <a className=" pl-4 pr-4 flex gap-2 items-center h-full text-zinc-600  rounded-full bg-background text-xs group-hover:border-opacity-90 border-zinc-300 transition-all duration-300 border border-opacity-0 " 
          href="https://github.com/sycodes95"
          target="_blank">
            <span >Created by kevin kim</span>
            <span className="font-bold text-coral">Github</span>
            <KeyboardArrowRightIcon className="group-hover:pl-1 transition-all duration-700" fontSize="inherit" />
          </a>
        </div>
        <div className=" flex w-full created-by-background absolute top-1/2 -translate-y-1/2 rounded-full z-10 h-[26px]"></div>
        
      </div>
      <div className="flex flex-col items-center  font-inter-tight-display">
        <span className="text-6xl text-coral text-center glow-text-pink">Tracking your job applications</span>
        <span className="text-6xl text-jet text-center glow-text-black border-b border-zinc-300">made simple. </span>
      </div>

      <div className="flex text-sm max-w-[55%] ">
        <span className="text-center text-zinc-600">
          Extremely simple web application to keep track of your job applications. 
          Use data visualization tools to improve your job hunting strategies.
        </span>
      </div>

      <div className="relative overflow-hidden h-fit rounded-lg group">
        <a className="flex h-8 items-center text-sm text-white overflow-hidden rounded-lg p-2 bg-jet " href="/api/auth/login">
          <span className="z-10">Get Started</span>
        </a>
        <div className="absolute h-full w-full bg-coral top-full transition-all duration-300 group-hover:top-0"></div>
      </div>
      

      {/* <span className="text-5xl text-jet">Of Your Job Applications</span> */}

    </div>
  )
}