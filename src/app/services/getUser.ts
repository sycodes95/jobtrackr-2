import { config } from "@/config/config";
import { UserType } from "../api/users/route";

export const getUser = async ( user: UserType) => {
  try {
    const sub = user.sub
    const fetchGET = await fetch( `${config.PUBLIC_HOST}/api/users?sub=${sub}`)
    const userObj = await fetchGET.json()
    console.log('GET USER',userObj);
    return userObj
  } catch (er) {
    console.error('Error fetch post create user', er)
    return null
  }
}