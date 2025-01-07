import speedTest from 'speedtest-net';
import { NextResponse } from 'next/server';


export async function GET(request) {
  try {
    const test = await speedTest({ acceptLicense: true });
   return NextResponse.json(
    {
        result:test
    }
   )
  } catch (error) {
    return NextResponse.json(
        {
            error:error
        }
       )
  }
}
