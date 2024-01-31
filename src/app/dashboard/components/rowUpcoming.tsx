'use client'

import { ApplicationDetails } from "@/app/applications/types/types"
import { fitRatingColor } from "@/app/applications/utils/fitRatingColor";
import AppMisc from "@/app/components/appMisc";
import { formatDateToReadable } from "@/utils/formatDateToReadable";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


interface RowUpcomingProps {
  app: ApplicationDetails
}
export default function RowUpcoming ({ app }: RowUpcomingProps) {
  return (
    <div className="flex text-left justify-between items-center gap-4 text-xs p-2 rounded-lg  border border-gray-300 pl-4 pr-4">
      <div className="flex gap-4 items-center">

      
      <span className="w-24 font-semibold">{formatDateToReadable(app.apply_date as string)}</span>
      <span className="w-24 ">{app.company_name}</span>
      <span className="w-24">
      {
      app.favorite ?
      <FavoriteIcon className="text-red-500" fontSize="small"/>
      :
      <FavoriteBorderIcon className="text-zinc-400" fontSize="small"/>
      }
      </span>
      {
      app.fit_rating && typeof app.fit_rating === 'number' ?
      <span className={`${fitRatingColor(app.fit_rating)} font-bold`}><em>{app.fit_rating} / 5</em></span>
      :
      <span>n/a</span>
      }
      </div>
      
      <AppMisc 
      contactName={app.contact_name}
      contactEmail={app.contact_email}
      contactPhone={app.contact_phone}
      notes={app.notes}
      applyUrl={app.apply_url}
      cWebsiteUrl={app.company_website}
      />
    </div>
  )
}