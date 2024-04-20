import { NextResponse } from 'next/server';
import type { NextApiResponse } from 'next';

export async function POST(request: Request) {
  const data: any = await request.json();
  console.log(data);
  return NextResponse.json(
    { test: "good" },
    { status: 200 }
  )
  // const data: any = await request.json();

  // try {
  //   console.log(data.age);
  // } catch (err: any) {
  //   console.error(err)
  //   return new NextResponse(`Failed ${err.message}`, {
  //     status: 500,
  //   })
  // }
}