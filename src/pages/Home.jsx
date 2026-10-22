import SorveteCard from '../components/SorveteCard'
import morango from '../assets/morango.jpg'
import chocolate from '../assets/chocolate.jpg'
import baunilha from '../assets/baunilha.png'
import menta from '../assets/menta.png'

const Home = () => {
    const sorvetes = [
        { id: 1, titulo: 'Chocolate Belga', preco: 'R$ 12.00', imagem: chocolate },
        { id: 2, titulo: 'Morango Cremoso', preco: 'R$ 10.00', imagem: morango },
        { id: 3, titulo: 'Baunilha', preco: 'R$ 11.00', imagem: baunilha },
        { id: 4, titulo: 'Menta', preco: 'R$ 15.00', imagem: menta },
    ]

    return (
        <main className="mt-10 mb-16 grow px-[5%]">
            <div className="mb-8">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-600">Sorveteria</p>
                <h2 className="titulo mt-3 text-4xl font-black tracking-[0.08em] text-blue-700 md:text-5xl">
                    Sabores em Destaque
                </h2>
            </div>

            <section className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
                {sorvetes.map((sorvete) => (
                    <SorveteCard
                        key={sorvete.id}
                        titulo={sorvete.titulo}
                        preco={sorvete.preco}
                        imagem={sorvete.imagem}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home
