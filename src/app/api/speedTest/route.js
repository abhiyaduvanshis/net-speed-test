import speedTest from 'speedtest-net'
import { NextResponse } from 'next/server';

export async function GET(req) {

    console.log(await speedTest());

}