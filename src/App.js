import React from "react";
import Cart  from "./Cart"; 
import Navbar from "./Navbar"

class App extends React.Component{
  constructor (){
    super();
    this.state = {
        product : [
            {
                qty : 0,
                title : "Mobile",
                price : 15000,
                id :1, 
                img : 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80'
            },
            {
                qty : 0,
                title : "Watch",
                price : 1200,
                id :2,
                img :'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80'
            },
            {
                qty : 0,
                title : "Laptop",
                price : 54000,
                id :3,
                img : 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
            },
            {
              qty : 0,
              title : "TV",
              price : 23000,
              id : 4,
              img : 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
            },{
              qty : 0,
              title : "Split AC",
              price : 35000,
              id : 5,
              img : 'https://media.istockphoto.com/photos/household-air-condition-picture-id948683040?s=612x612'
            },{
              qty : 0,
              title : "Window AC",
              price : 22000,
              id : 6,
              img : 'https://media.istockphoto.com/photos/air-conditioner-picture-id828662008'
            }
            //,{
            //   qty : 0,
            //   title : "Computer",
            //   price : 45000,
            //   id : 7,
            //   img : ''
            // },{
            //   qty : 0,
            //   title : "Refrigerator",
            //   price : 15000,
            //   id : 8,
            //   img : ''
            // },
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

  getTotalPRice = () => {
    const {product} = this.state;
    
    let total = 0;
    product.forEach((item)=>{
      let price = item.price * item.qty;
      total+=price; 
    });

    return total;
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
        <div style={{padding:10,fontSize:20 }}><h3>Total : Rs. {this.getTotalPRice()}/-</h3></div>
      </div>
    );
  }
}

export default App;
