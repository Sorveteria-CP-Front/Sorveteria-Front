const Contato = () => {
    return (
        <main className="mx-auto mt-10 mb-16 max-w-3xl px-[5%] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-500">Contato</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.12em] text-blue-700">
                Fale com a Blue Ice
            </h2>

            <div className="mt-8 rounded-3xl border border-white/70 bg-white/60 p-8 shadow-lg backdrop-blur-sm">
                <p className="text-lg text-slate-700">
                    📍 Avenida das Flores, 123 - Centro, São Paulo - SP
                </p>
                <p className="mt-4 text-lg text-slate-700">
                    📞 (11) 99999-0000
                </p>
                <p className="mt-4 text-lg text-slate-700">
                    ✉️ contato@blueice.com.br
                </p>
            </div>
        </main>
    )
}

export default Contato

