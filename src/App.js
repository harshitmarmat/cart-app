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
    this.db = firebase.firestore();
  }

  handlerIncreaseQuantity = (currentProduct) => {
      // console.log("Hey", product.qty);
      // console.log("Hey", product);
      const {product} = this.state;
      const index = product.indexOf(currentProduct);

      // product[index].qty+=1;

      // this.setState({
      //     // product : product
      //     product : product
      // });
      const docRef = this.db.collection('products').doc(product[index].id);

      docRef.update({
        qty : product[index].qty+1
      })
      .then(()=>{console.log("updated succesfully");})
      .catch((error)=>{console.log(error);})
  }


  handleDecreaseQuantity = (currentProduct) =>{
      // console.log("hey",currentProduct);
      if(currentProduct.qty>=1){
          const { product} = this.state;
          const index = product.indexOf(currentProduct);

          // product[index].qty -= 1;

          // this.setState({
          //     product : product
          // });
          const docRef = this.db.collection('products').doc(product[index].id)

          docRef.update({
            qty : product[index].qty-1
          })
          .then(()=>{console.log("succesfully updated");})
          .catch((error)=>{console.log(error);})
      }
  }

  handlerDeleteQuantity = (id) =>{
      const {product}  = this.state;

      // const items = product.filter((item)=> item.id !== id);

      // this.setState({
      //     product : items
      // })
      const docRef = this.db.collection('products').doc(id);

      docRef.delete()
      .then(()=>{console.log("Deleted Succesfully")})
      .catch((error)=>{console.log(error);})
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

    this.db
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

  addProduct = () =>{
    firebase
      .firestore()
      .collection('products')
      .add({
        img : "https://www.sony.co.in/image/d4f672c8c1b08401c3fb67cce747b7db?fmt=pjpeg&wid=330&hei=330&bgcolor=F1F5F9&bgc=F1F5F9",
        title : "Television",
        price : 2999,
        qty : 1
      })
      .then((docRef)=>{
        console.log("Product has been added ",docRef);
      })
      .catch((error)=> { 
        console.log("Error : ", error);
      })
  }

  render(){
    const { product, loading } = this.state;
    return(
      <div className="App">
        <Navbar 
          count = {this.getQuantity()}
        />
        <button onClick={this.addProduct} style={{padding:20 , fontSize : 20}}>Add Product</button>
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
