import SorveteCard from '../components/SorveteCard'
import SorveteImg from '../assets/fotobase.jpg'

const Home = () => {
    const sorvetes = [
        { id: 1, titulo: "Chocolate Belga", preco: "R$ 12.00", imagem: SorveteImg },
        { id: 2, titulo: "Morango Cremoso", preco: "R$ 10.00", imagem: SorveteImg },
        { id: 3, titulo: "Doce de Leite", preco: "R$ 11.00", imagem: SorveteImg },
        { id: 4, titulo: "Pistache", preco: "R$ 15.00", imagem: SorveteImg },
    ];


    return (
        <main className="px-[5%] mt-10 mb-16 grow">
            <h2 className="titulo text-3xl">Sabores em Destaque</h2>
            <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mt-10">
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
    );
};
