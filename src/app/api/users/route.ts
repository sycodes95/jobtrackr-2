import { NextRequest, NextResponse } from "next/server"

import { db } from "../../../../drizzle/db";
import { User } from "@/types/users";
import { users } from "../../../../drizzle/schema";

export type UserType = typeof users.$inferInsert;

export async function GET(req: NextRequest, res: NextResponse) {

  try {
    const userSub = JSON.parse(req.nextUrl.searchParams.get('sub') ?? '');
    const result = await db.query.users.findFirst({
      with: {
        sub: userSub
      }
    });

    return new Response(JSON.stringify(result))
    // query db and see if matching sub exists in the users table
    // if exists return { exist: true | false }
  } catch (er) {
    return new Response(JSON.stringify(null))
    console.error('Error in user-exist GET endpoint', er)
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const user: UserType = await req.json();
    if(typeof user.updated_at === 'string'){
      user.updated_at = new Date(user.updated_at)
    } 
    const insert = await db.insert(users).values(user).returning();
    return new Response(JSON.stringify(insert))
  } catch (er) {
    console.error('Error saving User to PG', er)
    return new Response(JSON.stringify(null))
  }
}