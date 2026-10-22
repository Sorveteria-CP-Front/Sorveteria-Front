import { Link } from 'react-router-dom'

const links = [
    // { nome: 'Home', to: '/home' },
    // { nome: 'Sorvetes', to: '/sorvetes' },
    // { nome: 'Contato', to: '/contato' },
]

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-100 via-white to-pink-100 text-slate-700">
            
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
                
                <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
                    {links.map((item) => (
                        <Link key={item.nome} to={item.to} className="transition hover:text-pink-500">
                            {item.nome}
                        </Link>
                    ))}
                </nav>

                <div className="text-sm text-slate-600">
                    <p>contato@blueice.com.br</p>
                    <p>(11) 99999-0000</p>
                </div>
            </div>

            <div className="border-t border-blue-200 bg-white/80">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-sm text-slate-500 md:flex-row">
                    <p>© 2026 Blue Ice</p>
                    <p>Feito com amor e sorvete</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer