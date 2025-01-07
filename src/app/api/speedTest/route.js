import speedTest from 'speedtest-net';
import { NextResponse } from 'next/server';
const FastSpeedtest = require("fast-speedtest-api");

export async function GET(request) {
    let speedtest = new FastSpeedtest({
        token: "dCPnkSo06vh4YzwG41sss0wpa-N7QwYY3f6EDA", // required
        verbose: false, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5
        bufferSize: 8, // default: 8
        unit: FastSpeedtest.UNITS.Mbps, // default: Bps
        proxy: 'http://optional:auth@my-proxy:123' // default: undefined
    });
    
    speedtest.getSpeed().then(s => {
        console.log(`Speed: ${s} Mbps`);
    }).catch(e => {
        console.error(e.message);
    });
}
