// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncreaseMangoes = () => {
    this.setState(prevState => {
      console.log(`mangoes count is ${prevState.count1}`)
      return {count1: prevState.count1 + 1}
    })
  }

  onIncreaseBananas = () => {
    this.setState(prevState => {
      console.log(`bananas count is ${prevState.count2}`)
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits-container1">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseMangoes}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits-container1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
