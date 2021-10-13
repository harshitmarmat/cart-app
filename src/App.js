import React from "react";
import Cart  from "./Cart"; 
import Navbar from "./Navbar";
// import * as firebase from 'firebase';
import firebase from 'firebase';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
        product : [],
        loading : true
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

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     // console.log('snapshot',snapshot.docs);
    //     snapshot.docs.map((doc)=>{
    //       console.log(doc.data());
    //     });

    //     const product = snapshot.docs.map((doc)=>{
    //         const data = doc.data();

    //         data['id'] = doc.id;
    //         return data;
    //     });

    //     this.setState({
    //       product :product,
    //       loading : false
    //     });
    //   })

    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot)=>{
        // console.log('snapshot',snapshot.docs);
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
        });

        const product = snapshot.docs.map((doc)=>{
            const data = doc.data();

            data['id'] = doc.id;
            return data;
        });

        this.setState({
          product :product,
          loading : false
        });
      })
  }

  render(){
    const { product, loading } = this.state;
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
        {loading && <h2>Loading Products...</h2>}
        {!loading && this.getTotalPRice()===0 && <h2>Empty Cart!! Add some product</h2>}
        <div style={{padding:10,fontSize:20 }}><h3>Total : Rs. {this.getTotalPRice()}/-</h3></div>
      </div>
    );
  }
}

export default App;
