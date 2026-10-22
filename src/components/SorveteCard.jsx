const SorveteCard = ({ titulo, preco, imagem }) => {
  return (
    <article className="sorvete-card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{preco}</p>
      <button type="button">Adicionar</button>
    </article>
  )
}

export default SorveteCard
