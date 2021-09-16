import React from 'react';

class CartItem extends React.Component{

    constructor () {                                    //constructor
        super();                                        //to call parent class constructor
       this.state = {
            price : 999,
            title : 'Mbile Phone',
            qty : 1,
            img : ''
        }
    }

    render () {
        const {price, title , qty} = this.state;   //object destructuring
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:24}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color : '#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons*/ }
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://img-premium.flaticon.com/png/512/484/premium/484662.png?token=exp=1631790264~hmac=cb513b713227b45d290f834bfc761f86" />                    
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        backgroundColor : '#ccc'
    },

}

export default CartItem;