import SorveteCard from './components/SorveteCard'
import morango from './assets/morango.jpg'
import chocolate from './assets/chocolate.jpg'
import baunilha from './assets/baunilha.png'
import menta from './assets/menta.png'

const produtos = [
    {
        titulo: 'Morango',
        preco: 'R$ 24,90',
        imagem: 'morango',
    },
    {
        titulo: 'Chocolate',
        preco: 'R$ 22,90',
        imagem: 'chocolate',
    },
    {
        titulo: 'Baunilha',
        preco: 'R$ 21,90',
        imagem: 'baunilha',
    },
    {
        titulo: 'Menta',
        preco: 'R$ 25,90',
        imagem: 'menta',
    },
]

function App() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.8),_rgba(255,255,255,1)_38%,_rgba(252,231,243,0.9)_100%)] px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-500">Sorveteria</p>
                    <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.12em] text-blue-700 md:text-5xl">
                        Coleção
                    </h1>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {produtos.map((produto) => (
                        <SorveteCard
                            key={produto.titulo}
                            titulo={produto.titulo}
                            preco={produto.preco}
                            imagem={produto.imagem}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default App