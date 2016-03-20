import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {boxes: []}
  }
  addColorBox() {
    this.setState({numBoxes: this.state.boxes.push(this.state.boxes.length)})
  }
  deleteColorbox(index,e) {
    this.setState({boxes: [...this.state.boxes.slice(0,index), ...this.state.boxes.slice(index+1)] })
  }
  renderColorBoxes() {
    return this.state.boxes.map((box,index) => {
      return <ColorBox key={box} name={box} deleteMe={this.deleteColorbox.bind(this,index)}/>
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.addColorBox.bind(this)}>Add Color Box</button>
        {this.renderColorBoxes()}
      </div>
    )
  }
}

class ColorBox extends React.Component {
  constructor(){
    super();
    this.state = {red:0, green:0, blue:0}
    this.update = this.update.bind(this)
  }
  componentWillMount(){
    this.setState(this.props);
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }
  render(){
    return (
      <div>
        <div style={{border:'1px solid black', width:'100px', height:'100px', backgroundColor:'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')'}}>
        </div>
        <button onClick={this.props.deleteMe}>Delete</button><br/>
        <Slider ref="red" value={this.state.red} update={this.update}/>
        {this.state.red}<br/>
        <Slider ref="green" value={this.state.green} update={this.update}/>
        {this.state.green}<br/>
        <Slider ref="blue" value={this.state.blue} update={this.update}/>
        {this.state.blue}<br/>
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" value={this.props.value} onChange={this.props.update}/>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);