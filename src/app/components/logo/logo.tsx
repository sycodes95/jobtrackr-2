import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function Logo () {
  return (
    <a href='/' className="flex items-center gap-1 text-xl">
      <BusinessCenterIcon className=" text-coral" fontSize='inherit' />
      <span className="text-2xl text-coral font-inter-tight-display">jobtrackr</span>
    </a>
  )
}