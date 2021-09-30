import React from "react";
import Cart  from "./Cart"; 
import Navbar from "./Navbar"

class App extends React.Component{
  constructor (){
    super();
    this.state = {
        product : [
            {
                qty : 1,
                title : "Mobile",
                price : 999,
                id :1, 
                img : ''
            },
            {
                qty : 4,
                title : "Watch",
                price : 99,
                id :2,
                img :''
            },
            {
                qty : 2,
                title : "Laptop",
                price : 9999,
                id :3,
                img : ''
            }
        ]
    }
  }

  handlerIncreaseQuantity = (currentProduct) => {
      // console.log("Hey", product.qty);
      // console.log("Hey", product);
      const {product} = this.state;
      const index = product.indexOf(currentProduct);

      product[index].qty+=1;

      this.setState({
          // product : product
          product : product
      });
  }


  handleDecreaseQuantity = (currentProduct) =>{
      // console.log("hey",currentProduct);
      if(currentProduct.qty>=1){
          const { product} = this.state;
          const index = product.indexOf(currentProduct);

          product[index].qty -= 1;

          this.setState({
              product : product
          });
      }
  }

  handlerDeleteQuantity = (id) =>{
      const {product}  = this.state;

      const items = product.filter((item)=> item.id !== id);

      this.setState({
          product : items
      })
  }
  getQuantity = () => {
    const {product} = this.state;

    let count =0;

    product.forEach((item) => {
      count+=item.qty;
    })
    return count;
  }
  render(){
    const { product } = this.state;
    return(
      <div className="App">
        <Navbar 
          count = {this.getQuantity()}
        />
        <Cart 
          product = {product}
          increaseQuantity = {this.handlerIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteQuantity  = {this.handlerDeleteQuantity}
        />
      </div>
    );
  }
}

export default App;
