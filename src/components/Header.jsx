import { Link } from 'react-router-dom'

const navItems = [
    { label: 'Home', to: '/home' },
    { label: 'Sorvetes', to: '/sorvetes' },
    { label: 'Contato', to: '/contato' },
]

const Header = () => {
    return (
        <header className="flex items-center justify-between px-[5%] py-6">
            <Link to="/home" className="logo cursor-pointer p-2 text-[2rem] font-bold text-amber-50 transition-all">
                Blue<span className="p-1 text-[#87CEEB]">Ice</span>
            </Link>

            <nav aria-label="Menu principal">
                <ul className="flex list-none items-center gap-8">
                    {navItems.map(({ label, to }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className="text-lg font-bold text-slate-700 no-underline transition-all hover:text-[#0f172a] hover:uppercase"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header