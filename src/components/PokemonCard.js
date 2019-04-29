import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    img: this.props.pokemonObj.sprites.front
  }
  
  handleClick = (prevState) => {
    if (this.state.img === this.props.pokemonObj.sprites.front) {
      return this.setState({
        img: this.props.pokemonObj.sprites.back
      })
    } else if (this.state.img === this.props.pokemonObj.sprites.back)
      return this.setState({
        img: this.props.pokemonObj.sprites.front
      })
  }

  render() {
console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.img} alt={this.props.pokemonObj.name} onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonHp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
