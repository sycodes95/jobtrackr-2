import { Toaster } from "sonner";
import Container from "../container";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer () {
  return (
    <Container type="footer"> 
      <div className="w-full max-w-7xl flex items-center justify-between h-24 gap-8 p-4">
        <span className="text-xs text-zinc-400">
          ©2024 Jobtrackr. All rights reserved.
        </span>

        <a className="text-2xl text-zinc-400 hover:text-white rounded-lg p-2 flex gap-2 items-center" href="https://github.com/sycodes95" target="_blank">
          <GitHubIcon fontSize="inherit" />
        </a>
      </div>
    </Container>
  )
}