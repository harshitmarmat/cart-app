import React from "react";
import CartItem from "./CartItem";

const Cart = (props) =>{
    const {product} = props;
    return (
        <div className="cart">
            {product.map((product)=>{
                return (
                    <CartItem 
                        product={product}
                        key={product.id}
                        increaseQuantity = {props.increaseQuantity}
                        decreaseQuantity = {props.decreaseQuantity}
                        deleteQuantity  = {props.deleteQuantity}
                    />
                )
            })}
        </div>
    );
}

export default Cart;