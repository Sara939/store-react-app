import { Component } from "react";
import Headline from "./Headline.component";
import ProductPic from "./Product-pic";

class Product extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
            <h3>Product</h3>
            <ProductPic urladd="back.jpg"/>
            <Headline name="my product"/>
            </div>
        )
    }
        
}
export default Product;