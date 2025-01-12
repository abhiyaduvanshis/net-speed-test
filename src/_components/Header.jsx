export default function Header(){
    return(
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold">SpeedTest</h1>
            <nav>
                <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}