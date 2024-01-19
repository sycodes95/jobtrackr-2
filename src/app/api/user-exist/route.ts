// import { NextRequest, NextResponse } from "next/server"

// import { drizzle } from "drizzle-orm/postgres-js";
// import * as schema from '../../../../drizzle/schema'
// import { db } from "../../../../drizzle/db";

// export async function GET(req: NextRequest, res: NextResponse) {
//   try {
//     //auth0 user sub string
//     const userSub = await req.json();

//     const result = await db.query.users.findFirst({
//       with: {
//         sub: userSub
//       }
//     })

//     if(result) {
//       return { user_exist: true};
//     } else {
//       return { user_exist: false};
//     }
//     // query db and see if matching sub exists in the users table
//     // if exists return { exist: true | false }
//   } catch (er) {
//     console.error('Error in user-exist GET endpoint', er)
//   } 
// }