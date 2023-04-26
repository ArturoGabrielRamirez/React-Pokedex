import Pokemon from "./Pokemon"


const PokemonList = ({ items }) => {
  return (
    <ul className="grid min-[320px]:grid-cols-2 min-[430px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-4">
      {items.map((item) => (
        <Pokemon key={item.id} item={item} />
      ))}
    </ul>
  )
}
export default PokemonList