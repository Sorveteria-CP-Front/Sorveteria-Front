const SorveteCard = ({
    titulo = 'Sorvete de Morango',
    preco = 'R$ 24,90',
    imagem = 'https://images.unsplash.com/photo-1570197788417-0e823ef4b269?auto=format&fit=crop&w=900&q=80',
}) => {
    return (
        <article className="group relative w-full max-w-[320px] overflow-hidden rounded-[28px] border border-blue-200 bg-[#fffafc] shadow-[0_20px_45px_rgba(14,30,66,0.16)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(236,72,153,0.22)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-pink-100/70" />

            <img
                src={imagem}
                alt={titulo}
                className="relative h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative space-y-4 bg-white/75 p-5 backdrop-blur-sm">
                <span className="inline-flex rounded-full border border-pink-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">
                    Destaque
                </span>

                <div>
                    <h2 className="text-xl font-black uppercase tracking-[0.08em] text-blue-700">
                        {titulo}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-600">Sabor artesanal</p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                    <p className="text-2xl font-black text-pink-500">{preco}</p>
                    <button className="rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:brightness-110">
                        Comprar
                    </button>
                </div>
            </div>
        </article>
    )
}

export default SorveteCard
