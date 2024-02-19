import LoyaltyIcon from '@mui/icons-material/Loyalty';
import RadarIcon from '@mui/icons-material/Radar';
import HttpIcon from '@mui/icons-material/Http';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloseIcon from '@mui/icons-material/Close';
import BusinessIcon from '@mui/icons-material/Business';


export const appLabelIcons  = {
  company_name: <BusinessIcon fontSize={'inherit'}/>,
  company_website: <LanguageIcon fontSize={'inherit'}/>,
  favorite: <FavoriteIcon fontSize={'inherit'}/>,
  apply_date: <SendIcon fontSize={'inherit'}/>,
  apply_method: <FontAwesomeIcon icon={faChessBoard} fontSize={'inherit'}/>,
  apply_url: <HttpIcon fontSize='inherit'/>,
  position: <RadarIcon fontSize='inherit'/>,
  fit_rating: <LoyaltyIcon  fontSize='inherit'/>,
  location: <FontAwesomeIcon icon={faLocationDot} fontSize={'inherit'}/>,
  interview_date: <FontAwesomeIcon icon={faComments} fontSize={'inherit'}/>,
  offer_amount: <AttachMoneyIcon fontSize={'inherit'}/>,
  rejected: <CloseIcon fontSize={'inherit'}/>,
  contact_name: undefined,
  contact_email: undefined,
  contact_phone: undefined,
  notes: undefined,
};