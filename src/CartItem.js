import React from 'react';

const CartItem = (props)=> {

    // increaseQuantity = () => {
    //     // console.log("this", this.state);
    //     //setstate form1
    //     this.setState({
    //         qty : this.props.product.qty + 1
    //     });

    //     // //setstate form2
    //     // this.setState( (prevState) =>{
    //     //     return ({
    //     //         qty : prevState.qty+1
    //     //     });
    //     // });
    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.props.product.qty;
    //     if(qty<=0){
    //         return;
    //     }
        
    //     this.setState({
    //         qty : qty-1
    //     });

    //     // this.setState((prevState)=>{
    //     //     return ({
    //     //         qty : prevState.qty-1
    //     //     });
    //     // });
    // }

    const {price, title , qty} = props.product;   //object destructuring
    const {
        product ,
        decreaseQuantity,
        increaseQuantity,
        deleteQuantity
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img /*alt="titleImage"*/ style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={{fontSize:24}}>{title}</div>
                <div style={{color : '#777'}}>Rs {price}</div>
                <div style={{color : '#777'}}>Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* buttons*/ }
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick= { () => increaseQuantity(product) }  
                        />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        onClick = { () => decreaseQuantity(product) }
                        />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://img-premium.flaticon.com/png/512/484/premium/484662.png?token=exp=1631790264~hmac=cb513b713227b45d290f834bfc761f86" 
                        onClick= { () => deleteQuantity(product.id) }
                        />                    
                </div>
            </div>
        </div>
    )
}


const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        backgroundColor : '#ccc'
    }
}

export default CartItem;