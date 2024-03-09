// Write your code here
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  gen = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    // const newTotal = Math.min(this.state.count + randomNumber, 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button onClick={this.gen}>Generate</button>
        <p>{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
