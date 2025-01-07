

import { NextResponse } from 'next/server';
export async function POST(req) {
  
    try {
        
      const startTime = Date.now();
      let uploadedBytes = 0;
  
      req.on('data', (chunk) => {
        uploadedBytes += chunk.length;
      });
  
      req.on('end', () => {
        const endTime = Date.now();
        const durationInSeconds = (endTime - startTime) / 1000;
        const speedMbps = (uploadedBytes * 8) / (durationInSeconds * 1e6); // Convert bytes to Mbps
  
        return NextResponse.json({
          uploadSpeed: speedMbps.toFixed(2), // Speed in Mbps
          uploadedBytes,
          durationInSeconds,
        });
      });
  
      req.on('error', (err) => {
        console.error(err);
        return NextResponse.json({ error: 'Failed to measure upload speed' });
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to perform speed test' });
    }
  }
  