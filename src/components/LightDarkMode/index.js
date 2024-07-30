// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode : true}

  changeMode = () =>{
    this.setState(prevState=>({lightMode : !prevState.lightMode}))
    
  }
  
  modeChange = () =>{
    const {lightMode} =this.state

    return lightMode? "Light Mode" : "Dark Mode"
  }


  render() {
    
    const mode = this.modeChange()
    
    const {lightMode} =this.state

    const style = lightMode? "card" :"card-1"


    return (
      <div className="container">
        <div className={style}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.changeMode}>{mode}</button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
