import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    input: ''
  }
  

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
      .then(pokemonsArr => {
        this.setState({
          pokemons: pokemonsArr
      })
    })
  }

  handleSearch = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  addPokemon = (pokemonData) => {
    fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers:
    {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({ pokemonData })
    })
    .then(res => res.json())
    .then(newPokemon  => {
      return this.state.pokemons.push(newPokemon)
    })
  }

  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} input={this.state.input}/>
        <br />
        <PokemonForm  addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
