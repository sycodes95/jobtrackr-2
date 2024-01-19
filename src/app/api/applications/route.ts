import { NextRequest, NextResponse } from "next/server"

import { db } from "../../../../drizzle/db";
import { applications, users } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";

export type ApplicationType = typeof applications.$inferInsert;

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const appId = Number(req.nextUrl.searchParams.get('appId'));
    const userId = Number(req.nextUrl.searchParams.get('userId'));

    if(appId) {
      const getSingleApp = await db.select().from(applications).where(eq(applications.id, appId));
      return NextResponse.json(getSingleApp)

    } else if(userId) {
      const getAllApps = await db.select().from(applications).where(eq(applications.user_id, userId));
      return NextResponse.json(getAllApps)
    }
  } catch (er) {
    console.error(er)
    return NextResponse.json([])
  }
  
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const appDetails: ApplicationType = await req.json();

    if(typeof appDetails.id !== 'number' || !appDetails.id || appDetails.id < 0) {
      return NextResponse.json({
        queryType: 'failed',
        application : null
      })
    }
    
    const app = await db.select().from(applications).where(eq(applications.id, appDetails.id));
    //if application already exists
    if(app.length > 0){
      //replace application
      const updated = await db.update(applications).set(appDetails).where(eq(applications.id, appDetails.id)).returning()

      return NextResponse.json({
        queryType: 'update',
        application : updated
      })
    } else if (app.length === 0 || !app) {

      const inserted = await db.insert(applications).values(appDetails).returning()
      return NextResponse.json({
        queryType: 'insert',
        application : inserted
      })
    }
    
  } catch (er) {
    console.error('Error PUT application', er)
    return NextResponse.json({
      queryType: 'failed',
      application : null
    })
  }
}