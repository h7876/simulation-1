import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      image:['imageURL1', 'imageURL2', 'imageURL3'],
      item: ['Sleeping bag', 'tent', 'cuzoo'],
      price: ['$1', '$2', '$3'],
      inventory: []
  
    }
    this.saveProductImage = this.saveProductImage.bind(this);
    this.saveProductName = this.saveProductName.bind(this);
    this.saveProductPrice = this.saveProductPrice.bind(this);
    this.cancel = this.cancel.bind(this);
    this.getInventory = this.getInventory.bind(this);
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

 getInventory(){
   let promise = axios.get('http://localhost:3005/api/inventory/')
   promise.then((response)=> {
     this.setState ({inventory: response.data})
     console.log(response.data);
   })
 }

 addInventory(){
axios.post('/api/product',{
  item: this.state.inventory,
  price: this.state.inventory,
  photo: this.state.inventory
})
 }



  cancel(){
    this.setState ({name: '', image: '', price: ''})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard inventory = {this.state.item} />
        <input type = "text" onChange = {this.saveProductImage}/>
        <input type = "text" onChange = {this.saveProductName}/>
        <input type = "text" onChange = {this.saveProductPrice}/>
        <button onClick = {this.getInventory}>GetInventory</button>
        <button onClick = {this.cancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );this.addItem ({atom:this.state.inventory})
  }
}

export default App;
