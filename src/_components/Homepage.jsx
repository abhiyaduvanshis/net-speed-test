export default function Homepage(){
    return(
        <main className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Test Your Internet Speed</h2>
            <p className="text-gray-700 mb-8">Click below to begin the test and measure your internet speed.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
            Start Test
            </button>

        
            <div className="mt-10 flex justify-center">
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center shadow-inner">
                <span id="speed" className="text-2xl font-bold">0 Mbps</span>
            </div>
            </div>

            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold">Download</h3>
                <p id="downloadSpeed" className="text-2xl font-bold text-blue-600">0 Mbps</p>
            </div>
            
            <div className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold">Upload</h3>
                <p id="uploadSpeed" className="text-2xl font-bold text-blue-600">0 Mbps</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold">Ping</h3>
                <p id="ping" className="text-2xl font-bold text-blue-600">0 ms</p>
            </div>
            </div>
        </main>
    )
}