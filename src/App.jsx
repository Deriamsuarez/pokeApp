import './App.css'
import useFetch from './hooks/useFetch'
import PokemonCard from './components/PokemonCard'

function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const pokemon = useFetch(url)

  return (
    <div className="App">
      {pokemon && pokemon.results.map(pokemon => <PokemonCard pokemon={pokemon} />)}
    </div>
  )
}

export default App
