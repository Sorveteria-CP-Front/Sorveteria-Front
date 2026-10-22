const links = [
    { nome: 'Home', href: '#' },
    { nome: 'Sabores', href: '#' },
    { nome: 'Contato', href: '#' },
]

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-100 via-white to-pink-100 text-slate-700">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-500">
                        Sorveteria
                    </p>
                    <h3 className="mt-2 text-2xl font-black uppercase tracking-wide text-blue-700">
                        Blue Ice
                    </h3>
                </div>

                <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
                    {links.map((item) => (
                        <a key={item.nome} href={item.href} className="transition hover:text-pink-500">
                            {item.nome}
                        </a>
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