import { NextRequest, NextResponse } from "next/server"

import { db } from "../../../../drizzle/db";
import { applications, users } from "../../../../drizzle/schema";
import { and, eq, inArray } from "drizzle-orm";
import { reformatDates } from "./_utils/reformatDates";
import { ApplicationDetails } from "@/app/applications/types/types";

export type ApplicationType = typeof applications.$inferInsert;

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const appId = Number(req.nextUrl.searchParams.get('appId'));
    const userId = Number(req.nextUrl.searchParams.get('userId'));

    if(appId) {
      const getSingleApp = await db.select().from(applications).where(eq(applications.app_id, appId));
      return NextResponse.json(reformatDates(getSingleApp as any) );

    } else if(userId) {
      const getAllApps = await db.select().from(applications).where(eq(applications.user_id, userId));
      return NextResponse.json(reformatDates(getAllApps as any));
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

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { appIdArray, user_id } : { appIdArray: number[], user_id: number} = await req.json();
    const deleted = await db.delete(applications)
    .where(and(inArray(applications.app_id, appIdArray), eq(applications.user_id, user_id)));

    return NextResponse.json({
      queryType: 'delete',
      application : deleted
    });
    
  } catch (er) {
    console.error('Error PUT application', er)

    return NextResponse.json({
      queryType: 'delete',
      application : [],
      error: er
    });
    
  }
}