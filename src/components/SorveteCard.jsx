const SorveteCard = ({
 feature/pagina-App.jsx
    titulo = 'Sorvete',
    preco = 'R$ 24,90',
    imagem,
}) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_18px_40px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_52px_rgba(236,72,153,0.18)]">
=======
    titulo = 'Sorvete de Morango',
    preco = 'R$ 24,90',
    imagem = 'https://images.unsplash.com/photo-1570197788417-0e823ef4b269?auto=format&fit=crop&w=900&q=80',
}) => {
    return (
        <div className="group relative w-full max-w-[320px] overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_18px_40px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_52px_rgba(236,72,153,0.18)]">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-white/10 to-pink-100/80" />

            <img
                src={imagem}
                alt={titulo}
                className="relative h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative space-y-4 p-5">
                <span className="inline-flex rounded-full border border-pink-200 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                    Destaque
                </span>

                <div>
                    <h2 className="text-xl font-black uppercase tracking-[0.08em] text-blue-700">
                        {titulo}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">Sabor artesanal</p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                    <p className="text-2xl font-black text-pink-500">{preco}</p>
                    <button className="rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:brightness-110">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SorveteCard
