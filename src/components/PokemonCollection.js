import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  
  filteredPokemons = () => {
      return this.props.pokemons.filter(pokemon => pokemon.name.includes(this.props.input))
  }
  
    pokemon = () => this.filteredPokemons().map((pokemon) => {
      return <PokemonCard
        key={pokemon.id} pokemonObj={pokemon}
        pokemonHp={pokemon.stats.find((stat) => stat.name === 'hp')} />
    })
    
    render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.pokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
