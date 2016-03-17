import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <ColorBox red={255} green={0} blue={0}/>
        <ColorBox red={0} green={255} blue={0}/>
        <ColorBox red={0} green={0} blue={255}/>
      </div>
    )
  }
}

class ColorBox extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this)
  }
  componentWillMount(){
    this.setState({
      red: this.props.red,
      green: this.props.green,
      blue: this.props.blue
    })
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

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

ReactDOM.render(
  <App txt="this is the props text" cat={0}/>,
  document.getElementById('app')
);