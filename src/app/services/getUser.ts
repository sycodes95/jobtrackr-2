import { config } from "@/config/config";

export const getUser = async ( sub: string) => {
  try {  
    const fetchGET = await fetch( `${config.PUBLIC_HOST}/api/users?usersub=${sub}`)
    const userObj = await fetchGET.json()
    return userObj
  } catch (er) {
    console.error('Error fetch post create user', er)
    return null
  }    
}







