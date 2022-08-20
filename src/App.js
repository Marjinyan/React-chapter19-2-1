import React from 'react'

class App extends React.Component {
  first = React.createRef()
  handleClick = () => {
    console.log(this.first.current.value)
  }
  render(){
  return <>
    <input ref={this.first} type="text"/>
    <button onClick={this.handleClick}>save</button>
  </>
  }
}
export default App
