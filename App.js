import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: 'this is the state text'}
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
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