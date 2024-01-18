import { config } from "@/config/config";
import { UserType } from "../api/users/route";

export const createUser = async ( user: UserType) => {
  try {
    const fetchPOST = await fetch( `${config.PUBLIC_HOST}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const userObj = await fetchPOST.json();

    return userObj
  } catch (er) {
    console.error('Error fetch post create user', er);
    return null;

  }
}