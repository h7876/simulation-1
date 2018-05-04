import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      image:['imageURL1', 'imageURL2', 'imageURL3'],
      item: ['Sleeping bag', 'tent', 'cuzoo'],
      price: ['$1', '$2', '$3']
  
    }
    this.saveProductImage = this.saveProductImage.bind(this);
    this.saveProductName = this.saveProductName.bind(this);
    this.saveProductPrice = this.saveProductPrice.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  saveProductImage(e) {
    this.setState ({image: e.target.value})
  }

  saveProductName(e){
    this.setState ({item: e.target.value})
  }

  saveProductPrice(e){
    this.setState ({price: e.target.value})
  }

  cancel(){
    this.setState ({name: '', image: '', price: ''})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard inventory = {[[this.state.item] +  ',' +[this.state.price] + ',' +[this.state.image]]} />
        <input type = "text" onChange = {this.saveProductImage}/>
        <input type = "text" onChange = {this.saveProductName}/>
        <input type = "text" onChange = {this.saveProductPrice}/>
        <button onClick = {this.cancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );this.addItem ({atom:this.state.inventory})
  }
}

export default App;
