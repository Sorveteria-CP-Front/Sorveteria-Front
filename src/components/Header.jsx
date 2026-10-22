import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 px-[5%] hover:text-[#F4C2C2]">
            <h1 className="logo p-2 text-[2rem] font-bold text-amber-50 cursor-pointer transition-all">Blue
                <span className="text-[#87CEEB] p-1">Ice</span></h1>
            <nav>
                <ul className="flex list-none items-center gap-8">
                    <li>
                        <Link to="/home" className="text-white text-lg no-underline hover:text-[#95ff00] hover:uppercase transition-all">Home</Link>
                    </li>
                    <li>
                        <Link to="/sorvetes" className="text-white text-lg no-underline hover:text-[#87CEEB] hover:uppercase transition-all">Sorvetes</Link>
                    </li>
                    <li>
                        <Link to="/contato" className="text-white text-lg no-underline hover:text-[#87CEEB] hover:uppercase transition-all">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header