import https from 'https';
import { NextResponse } from 'next/server';

export async function GET(req) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
      }
    
      try {
        const downloadTestUrl = 'https://net-speed-test-eight.vercel.app/5-mb-example-file.pdf'; // Test file URL
        const startTime = performance.now();
        const fileSizeInBytes = 5 * 1024 * 1024; // 5 MB (example size)
    
        // Measure Download Speed
        const downloadSpeed = await new Promise((resolve, reject) => {
          let downloadedBytes = 0;
    
          https.get(downloadTestUrl, (response) => {
            response.on('data', (chunk) => {
              downloadedBytes += chunk.length;
            });
    
            response.on('end', () => {
              const endTime = performance.now();
              const durationInSeconds = (endTime - startTime) / 1000;
              const speedMbps = (downloadedBytes * 8) / (durationInSeconds * 1000000);

              console.log(downloadedBytes * 8)
              console.log(durationInSeconds)
              resolve(speedMbps);
            });

            console.log(downloadedBytes)
    
            response.on('error', (err) => reject(err));
          });
        });
    
        // Measure Ping
        const pingStart = Date.now();
        await new Promise((resolve) =>
          https.get('https://www.google.com', resolve)
        );
        const ping = Date.now() - pingStart;
    
        // Response
        return NextResponse.json({
          ping,
          download: downloadSpeed,
          upload: 'Not implemented', // Implement upload if needed
        });
      } catch (error) {
        console.error('Speed Test Error:', error);
        return NextResponse.json({ error: 'Failed to perform speed test' });
      }

}