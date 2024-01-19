import { NextRequest, NextResponse } from "next/server"

import { db } from "../../../../drizzle/db";
import { users } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";

export type UserType = typeof users.$inferInsert;

export async function GET(req: NextRequest, res: NextResponse) {

  try {

    const userSub = req.nextUrl.searchParams.get('usersub')
    
    if(!userSub) return NextResponse.json(null)

    const result = await db.select().from(users).where(eq(users.sub, userSub))
    return NextResponse.json(result[0] ?? null)
    
  } catch (er) {
    console.error('Error in user-exist GET endpoint', er)
    return NextResponse.json(null)
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