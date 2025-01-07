import speedTest from 'speedtest-net';
import { NextResponse } from 'next/server';


export default async function handler(req, res) {
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
