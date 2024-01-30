'use client'

import { ApplicationDetails } from "@/app/applications/types/types"
import { fitRatingColor } from "@/app/applications/utils/fitRatingColor";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


interface RowUpcomingProps {
  app: ApplicationDetails
}
export default function RowUpcoming ({ app }: RowUpcomingProps) {
  return (
    <div className="flex items-center gap-4">
      <span>{app.company_name}</span>
      {
      app.favorite ?
      <FavoriteIcon className="text-red-500" fontSize="small"/>
      :
      <FavoriteBorderIcon className="text-zinc-400" fontSize="small"/>
      }
      {
      app.fit_rating && typeof app.fit_rating === 'number' ?
      <span className={`${fitRatingColor(app.fit_rating)} font-bold`}><em>{app.fit_rating} / 5</em></span>
      :
      <span>n/a</span>
      }
    </div>
  )
}