
import { ApplicationDetails } from "@/app/applications/types/types"
import { fitRatingColor } from "@/app/applications/utils/fitRatingColor";
import AppMisc from "@/app/components/appMisc";
import { formatDateToReadable } from "@/utils/formatDateToReadable";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface RowOfferProps {
  app?: ApplicationDetails;
  noRows?: boolean;
}
export default function RowOffer ({ app, noRows = false}: RowOfferProps) {
  return (
    <>
    {
    app && !noRows ?
    <tr className="text-left gap-4 text-xs  rounded-lg  border-t border-border ">
      <td className="w-24 font-semibold overflow-hidden text-ellipsis p-4 whitespace-nowrap">{formatDateToReadable(app.apply_date as string)}</td>
      <td className="w-24 overflow-hidden text-ellipsis p-4 whitespace-nowrap">{app.company_name}</td>
      <td className="w-24 overflow-hidden text-ellipsis p-4 whitespace-nowrap">
      {
      app.favorite ?
      <FavoriteIcon className="text-red-500" fontSize="small"/>
      :
      <FavoriteBorderIcon className="text-zinc-400" fontSize="small"/>
      }
      </td>
      {
      typeof app.offer_amount === 'number' ?
      <td className={` font-bold overflow-hidden text-ellipsis whitespace-nowrap p-4`}><em>${app.offer_amount}</em></td>
      :
      <td className="p-4 whitespace-nowrap"> n/a</td>
      }
      <td className="whitespace-nowrap pl-4">
        <AppMisc 
        contactName={app.contact_name}
        contactEmail={app.contact_email}
        contactPhone={app.contact_phone}
        notes={app.notes}
        applyUrl={app.apply_url}
        cWebsiteUrl={app.company_website}
        />
      </td>
      
    </tr>
    :

    <tr className="text-left gap-4 text-xs  rounded-lg  border-t border-border col-span-full ">
      <td className="w-24 font-semibold overflow-hidden text-ellipsis p-4 whitespace-nowrap col-span-full">n/a</td>
    </tr>
    
    }
    </>
    
  )
}