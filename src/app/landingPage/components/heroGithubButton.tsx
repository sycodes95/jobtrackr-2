import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function HeroGithubButton () {
  return (
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
  )
}