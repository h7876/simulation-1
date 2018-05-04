import React, {Component} from 'react';
import Product from './Product/Product'

export default class Dashboard extends Component {


render(props){
    let item =this.props.inventory;
    console.log(this.props.inventory);
    let inventoryDisplay = item.map((item, index) => {
        <div key = {item + index}> <Product item = {this.props.inventory}/></div>
        return inventoryDisplay
    }

)
    return(
        
        <div>
           {inventoryDisplay}
        Dashboard
           <Product/>
        </div>
        
        )
    }

};