import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function HeroStartButton () {
  return (
    <button className="relative flex gap-2 h-8 items-center text-sm text-white overflow-hidden rounded-lg p-2 bg-jet " onClick={()=> window.location.href = '/api/auth/login'}>
      <span className="z-10">Get Started</span>
      <ArrowOutwardIcon className='z-10' fontSize='inherit' />
      <div className="absolute left-0 h-full w-full bg-coral top-full transition-all duration-300 group-hover:top-0 hover:cursor-pointer"></div>
    </button>
  )
}