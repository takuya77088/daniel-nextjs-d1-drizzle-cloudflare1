/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from '@/server/db';
import { customerTable } from '@/server/db/schema';

export const runtime = 'edge';

export async function GET() {
  const result = await db.select().from(customerTable);

  return Response.json({ result });
}

export async function POST(request: Request) {
  const body: any = await request.json();

  const result = await db
    .insert(customerTable)
    .values({
      name: body.name,
      email: body.email,
    })
    .returning();

  return Response.json({ object: 'customer', data: result[0] });
}
