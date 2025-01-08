"use client"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage(){

    const [downloadSpeed, setDownloadSpeed] = useState(null);
    const [uploadSpeed, setUploadSpeed] = useState(null);
    const [overAllSpeed, setoverAllSpeed] = useState(null);
    const [ping, setPing] = useState(null);
    const [isTesting, setIsTesting] = useState(false);
  
    const calculateSpeed = async () => {
      setIsTesting(true);
      const startTime = performance.now();
      const fileSizeInBytes = 10 * 1024 * 1024; // 5 MB (example size)
      const testUrl = "/upload/blob"; // Use a file URL of known size
  
      try {
        const response = await axios.get(testUrl, {
          responseType: "arraybuffer",
          headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
          },
        });
  
        if(response){
          const getfileSize = response.data.byteLength
          const endTime = performance.now();
          const timeTakenInSeconds = (endTime - startTime) / 1000;
          const speedMbps = (getfileSize * 8) / (timeTakenInSeconds * 1000000);
          console.log(startTime)
          console.log(endTime)
          console.log(timeTakenInSeconds)
          setDownloadSpeed(speedMbps.toFixed(2));
        }
  
      } catch (error) {
        console.error("Error during download test:", error);
        setDownloadSpeed("Error");
      }
  
       const file = new Blob([new Array(fileSizeInBytes).fill("A").join("")], {
         type: "text/plain",
       });
   
       const formData = new FormData();
       formData.append("file", file);
   
    
       try {
         // Replace with your server endpoint
         const serverEndpoint = "/api/uploadTest";
   
        await axios.post(serverEndpoint, formData, {
           headers: {
              "Content-Type": "multipart/form-data",
           },
         });

         const endTime = performance.now();
         const timeTakenInSeconds = (endTime - startTime) / 1000;
   
         // Calculate upload speed in Mbps
         const speedMbps =(fileSizeInBytes * 8) / (timeTakenInSeconds * 1000000);
         console.log(speedMbps)
         console.log(typeof(speedMbps))
   
         setUploadSpeed(speedMbps.toFixed(2));
       } catch (error) {
         console.error("Error during upload test:", error);
         setUploadSpeed("Error");
       }
  
      // Test ping
      try {
        const pingStart = performance.now();
        await axios.get(testUrl, { responseType: "arraybuffer" });
        const pingEnd = performance.now();
        setPing((pingEnd - pingStart).toFixed(2));
      } catch {
        setPing("Error");
      }

      setIsTesting(false);


    };


  useEffect(()=>{
    if(downloadSpeed && uploadSpeed){
        const overallSpeedTest = Math.ceil((Number(downloadSpeed)+Number(uploadSpeed))/2)
        setoverAllSpeed(overallSpeedTest.toString().slice(0, 2))


    }
    
  },[downloadSpeed,uploadSpeed])
    return(
        <main className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Test Your Internet Speed</h2>
            <p className="text-gray-700 mb-8">Click below to begin the test and measure your internet speed.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300" onClick={calculateSpeed} disabled={isTesting}>
            {isTesting ? "Testing..." : "Start Test"}
            </button>

        
            <div className="mt-10 flex justify-center">
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center shadow-inner">
                <span id="speed" className="text-2xl font-bold">{overAllSpeed ? `${overAllSpeed} Mbps` : "0 Mbps"}</span>
            </div>
            </div>

            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold">Download</h3>
                <p id="downloadSpeed" className="text-2xl font-bold text-blue-600"> {downloadSpeed ? `${downloadSpeed.toString().slice(0, 2)} Mbps` : "0 Mbps"}</p>
            </div>
            
            <div className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold">Upload</h3>
                <p id="uploadSpeed" className="text-2xl font-bold text-blue-600"> {uploadSpeed ? `${uploadSpeed.toString().slice(0, 2)} Mbps` : "0 Mbps"}</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold">Ping</h3>
                <p id="ping" className="text-2xl font-bold text-blue-600"> {ping ? `${ping.toString().slice(0, 2)} ms` : "0 ms"}</p>
            </div>
            </div>
        </main>
    )
}