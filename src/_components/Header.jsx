export default function Header(){
    return(
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold">GyaniMeter</h1>
            <nav>
                <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/calculator" className="hover:underline">Calculator</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}