"use client"
import { useEffect, useState } from "react";
import axios from "axios";

// export default function Homepage(){

//     const [downloadSpeed, setDownloadSpeed] = useState(null);
//     const [uploadSpeed, setUploadSpeed] = useState(null);
//     const [overAllSpeed, setoverAllSpeed] = useState(null);
//     const [ping, setPing] = useState(null);
//     const [isTesting, setIsTesting] = useState(false);

//     const calculateSpeed = async () => {
//       setIsTesting(true)
//       const startTime = performance.now();
//       const fileSizeInBytes = 1 * 1024 * 1024
//       const testUrl = "/upload/blob"
//       try {
//         const response = await axios.get(testUrl, {
//           responseType: "arraybuffer",
//           headers: {
//               'Cache-Control': 'no-cache',
//               'Pragma': 'no-cache',
//               'Expires': '0',
//           },
//         })

//         if(response){
//           const getfileSize = response.data.byteLength
//           const endTime = performance.now();
//           const timeTakenInSeconds = (endTime - startTime) / 1000;
//           const speedMbps = (getfileSize * 8) / (timeTakenInSeconds * 1000000);
//           console.log(startTime)
//           console.log(endTime)
//           console.log(timeTakenInSeconds)
//           setDownloadSpeed(speedMbps.toFixed(2));
//         }

//       } catch (error) {
//         console.error("Error during download test:", error);
//         setDownloadSpeed("Error");
//       }

//       const file = new Blob([new Array(fileSizeInBytes).fill("A").join("")], {
//          type: "text/plain",
//       });

//       const formData = new FormData();
//       formData.append("file", file);

//       try {

//         // Replace with your server endpoint
//         const serverEndpoint = "/api/uploadTest";
//         await axios.post(serverEndpoint, formData, {
//            headers: {
//               "Content-Type": "multipart/form-data",
//            },
//         });

//         const endTime = performance.now();
//         const timeTakenInSeconds = (endTime - startTime) / 1000;
//         // Calculate upload speed in Mbps
//         const speedMbps =(fileSizeInBytes * 8) / (timeTakenInSeconds * 1000000);
//         setUploadSpeed(speedMbps.toFixed(2));

//       } catch (error) {
//         console.error("Error during upload test:", error);
//         setUploadSpeed("Error");
//       }
  
//       // Test ping
//       try {

//         const pingStart = performance.now();
//         await axios.get(testUrl, { responseType: "arraybuffer" });
//         const pingEnd = performance.now();
//         setPing((pingEnd - pingStart).toFixed(2));

//       } catch {
//         setPing("Error");
//       }

//       setIsTesting(false);
//     };

const Homepage = () => {
    const [downloadSpeed, setDownloadSpeed] = useState(null);
    const [uploadSpeed, setUploadSpeed] = useState(null);
    const [overAllSpeed, setoverAllSpeed] = useState(null);
    const [ping, setPing] = useState(null);
    const [isTesting, setIsTesting] = useState(false);

  const testDownloadSpeed = async () => {
    const fileUrl = '/upload/blob'; // Use a file with known size
    const startTime = Date.now();

    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const fileSizeInBits = blob.size * 8;

    const endTime = Date.now();
    const durationInSeconds = (endTime - startTime) / 1000;

    const speedInMbps = (fileSizeInBits / (durationInSeconds * 1024 * 1024)).toFixed(2);
    setDownloadSpeed(speedInMbps);
  };

  const testUploadSpeed = async () => {
    const data = new Uint8Array(1 * 1024 * 1024); // 10MB of random data
    const startTime = Date.now();

    const response = await axios.post('/api/uploadTest', data, {
      headers: {
        'Content-Type': 'application/octet-stream', // Specify binary data           
      },
    });
    
    const endTime = Date.now();
    const durationInSeconds = (endTime - startTime) / 1000;
    const dataSizeInBits = data.length * 8;
    const speedInMbps = (dataSizeInBits / (durationInSeconds * 1024 * 1024)).toFixed(2);
    setUploadSpeed(speedInMbps);
  };

  const pingSpeed=async()=>{
    // Test ping
    try {
      const fileUrl = '/upload/blob'; // Use a file with known size
      const pingStart = performance.now();
      await axios.get(fileUrl, { responseType: "arraybuffer" });
      const pingEnd = performance.now();
      setPing((pingEnd - pingStart).toFixed(2));

    } catch {
      setPing("Error");
    }
}

const startTest = async () => {
  setIsTesting(true);
  setDownloadSpeed(null);
  setUploadSpeed(null);

  await testDownloadSpeed();
  await testUploadSpeed();
  await pingSpeed();

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
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300" onClick={startTest} disabled={isTesting}>
        {isTesting ? "Testing..." : "Start Test"}
        </button>

    
        <div className="mt-10 flex justify-center">
        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center shadow-inner">
            <span id="speed" className="text-2xl font-bold">Mbps</span>
        </div>
        </div>

        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-lg font-semibold">Download</h3>
            <p id="downloadSpeed" className="text-2xl font-bold text-blue-600"> {downloadSpeed ? `${Math.ceil(downloadSpeed).toString().slice(0, 2)} Mbps` : "0 Mbps"}</p>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-lg font-semibold">Upload</h3>
            <p id="uploadSpeed" className="text-2xl font-bold text-blue-600"> {uploadSpeed ? `${Math.ceil(duploadSpeed).toString().slice(0, 2)} Mbps` : "0 Mbps"}</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-lg font-semibold">Ping</h3>
            <p id="ping" className="text-2xl font-bold text-blue-600"> {ping ? `${Math.ceil(dping).toString().slice(0, 2)} ms` : "0 ms"}</p>
        </div>
        </div>
    </main>
)
}



export default Homepage;