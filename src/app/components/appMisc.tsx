'use client'

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { copyToClip } from "../utils/copyToClip";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';


interface AppMiscProps {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
  applyUrl: string;
  cWebsiteUrl: string;

}
export default function AppMisc ( {
  contactName,
  contactEmail,
  contactPhone,
  notes,
  applyUrl,
  cWebsiteUrl
} : AppMiscProps) {
  return (
  <Popover>
    <PopoverTrigger>
      <Button className="text-left text-xs w-12 h-8 overflow-hidden text-ellipsis bg-foreground text-background" variant={'outline'}>View</Button>
    </PopoverTrigger>
    <PopoverContent className="flex flex-col gap-2">

      <span className="text-xs font-bold p-2 border-b border-border">Contact Info</span>
      
      <div className="p-2 text-xs flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="">Company Name:</span>
          <span>{contactName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="">Company Email:</span>
          <span>{contactEmail}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="">Company Phone:</span>
          <span>{contactPhone}</span>
        </div>

      </div>

      <span className="text-xs font-bold p-2 border-b border-border">Notes</span>

      <div className="p-2 text-xs flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>{notes}</span>
        </div>

      </div>

      <span className="text-xs font-bold p-2 border-b border-border">Company Website URL</span>
      
      <div className="p-2 text-xs flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {
          cWebsiteUrl ?
          <Button className="flex items-center p-0 gap-2 justify-start font-medium w-full bg-background hover:text-zinc-400 text-xl hover:bg-accent text-foreground " onClick={()=> copyToClip(cWebsiteUrl)}>
            
              <ContentPasteIcon fontSize="small"/> 
              <span className=" text-xs">{cWebsiteUrl}</span>
            
          </Button>
          :
          <span className="text-xs">
            n/a
          </span>

          }

        </div>

      </div>

      <span className="text-xs font-bold p-2 border-b border-border">Apply URL</span>
      
      <div className="p-2 text-xs flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {
          applyUrl ?
          <Button className="flex items-center p-0 gap-2 justify-start font-medium w-full bg-background hover:text-zinc-400 text-xl hover:bg-accent text-foreground " onClick={()=> copyToClip(applyUrl)}>
            
              <ContentPasteIcon fontSize="small"/> 
              <span className=" text-xs">{applyUrl}</span>
            
          </Button>
          :
          <span className="text-xs">
            n/a
          </span>

          }

        </div>

      </div>



    </PopoverContent>
  </Popover>
  )
}