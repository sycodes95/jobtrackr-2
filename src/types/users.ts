export interface User {
  nickname: string;
  name: string;
  picture: string;
  updated_at?: string;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
}