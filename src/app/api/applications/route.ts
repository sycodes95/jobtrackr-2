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
      const getSingleApp = await db.select().from(applications).where(eq(applications.app_id, appId));
      return NextResponse.json(getSingleApp);

    } else if(userId) {
      const getAllApps = await db.select().from(applications).where(eq(applications.user_id, userId));
      return NextResponse.json(getAllApps);
    }
  } catch (er) {
    console.error(er)
    return NextResponse.json([])
  }
  
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { appDetails, user_id } : { appDetails: ApplicationType, user_id: number} = await req.json();

    appDetails.user_id = user_id

    if(!appDetails.app_id) {
      const inserted = await db.insert(applications).values(appDetails).returning();

      return NextResponse.json({
        queryType: 'insert',
        application : inserted
      })
    }
    
    if(appDetails.app_id){
      //replace application
      const updated = await db.update(applications).set(appDetails).where(eq(applications.app_id, appDetails.app_id)).returning()

      return NextResponse.json({
        queryType: 'update',
        application : updated
      })
    }
    
  } catch (er) {
    console.error('Error PUT application', er)
    return NextResponse.json({
      queryType: 'failed',
      application : null,
      error: er
    })
  }
}