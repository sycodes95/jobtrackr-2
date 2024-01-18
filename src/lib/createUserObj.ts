import { UserType } from "@/app/api/users/route";
import { Claims } from "@auth0/nextjs-auth0";

export const createUserObj = (user: Claims) => {
  // transforms auth0 user object into the postgres user format
  
  return {
    nickname: user['nickname'],
    name: user['name'],
    picture: user['picture'],
    updated_at: user['updated_at'],
    email: user['email'],
    email_verified: user['email_verified'],
    sub: user['sub'],
    sid: user['sid']
  } as UserType;
}