import React from 'react'
import useFetch from '../hooks/useFetch'

const PokemonCard = ({ pokemon }) => {

  const poke = useFetch(pokemon.url)
console.log(poke?.sprites.other.dream_world.front_default)
  return (
    <div className="PokemonContainer">
      <div className="cardPokemon card glassEffect">
        <div className="infoContainer">
          <div className="imgContainer">
            <img src={poke?.sprites.other.dream_world.front_default} alt="" />
          </div>
          <h2>{poke?.name}</h2>
          <div className="info">
            <h3>Moves</h3>
            <ul>
              {poke && poke.moves.slice(0, 5).map(move =><li>{move.move.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PokemonCard