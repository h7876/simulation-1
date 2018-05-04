import React, {Component} from 'react';
import Product from './Product/Product'

export default class Dashboard extends Component {


render(props){
  console.log(this.props.inventory)
    let inventoryDisplay = this.props.inventory.map(item => {
        <div key = {item}> <Product item = {inventoryDisplay}/></div>
        
        return inventoryDisplay;
       
    }

)
console.log(inventoryDisplay)
    return(
        
        <div>
           {inventoryDisplay}
        Dashboard
           <Product/>
        </div>
        
        )
    }

};