import React from 'react'
import CardPokemon from './CardPokemon'
import { useState, useEffect } from 'react'

const App = () => {


  const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

   const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
   }, [])

  return (
    <div>
      <section>
          <h3>Bienvenido a la</h3>
            <h1>Pokédex</h1>
          <hr />
      </section>
      <section>
      <div>
          {allPokemons.map( (pokemonStats, index) => 
            <CardPokemon
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              abilities={pokemonStats.abilities}
            />)}
        </div>
      </section>
      <button className="load-more" onClick={() => getAllPokemons()}>Mas Pokemons</button>
    </div>
  )
}

export default App