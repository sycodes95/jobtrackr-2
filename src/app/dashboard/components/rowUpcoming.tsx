'use client'

import { ApplicationDetails } from "@/app/applications/types/types"
import { fitRatingColor } from "@/app/applications/utils/fitRatingColor";
import { formatDate } from "@/utils/formatDate";
import { formatDateToReadable } from "@/utils/formatDateToReadable";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


interface RowUpcomingProps {
  app: ApplicationDetails
}
export default function RowUpcoming ({ app }: RowUpcomingProps) {
  return (
    <div className="flex text-left items-center gap-4 text-xs p-2 rounded-lg border border-blue-200 bg-blue-100 ">
      <span className="w-24">{formatDateToReadable(app.apply_date as string)}</span>
      <span className="w-24">{app.company_name}</span>

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
  )
}