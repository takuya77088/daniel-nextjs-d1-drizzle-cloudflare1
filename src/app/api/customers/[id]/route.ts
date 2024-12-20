import { db } from '@/server/db';
import { customerTable } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export const runtime = 'edge';

type Params = {
  id: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const result = await db
    .select()
    .from(customerTable)
    .where(eq(customerTable.id, Number(params.id)));

  return Response.json({ result });
}
