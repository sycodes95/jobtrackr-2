import Container from "../container";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer () {
  return (
    <Container type="footer"> 
      <div className="w-full max-w-7xl flex items-center justify-between h-14 gap-8 ">
        <span className="text-xs text-jet">
          Jobtrackr all rights reserved ©
        </span>

        <a className="text-xs text-white rounded-lg bg-coral p-2 flex gap-2 items-center" href="https://github.com/sycodes95" target="_blank">
          <span>
            Created by kevin kim 
          </span>

          <GitHubIcon fontSize="inherit" />
        </a>
      </div>
    </Container>
  )
}