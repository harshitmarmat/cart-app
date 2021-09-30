import { findByLabelText } from "@testing-library/dom";
import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer} >
                <img
                    style = {styles.cartIcon}
                    alt="cart-icon"
                    src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
                />
                <span style={styles.cartCount} >{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon : {
        height : 32,
        marginRight : 30                 
    },
    nav : { 
        height : 70,
        background :'#4367b2',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    cartIconContainer : {
        position : 'relative'
    },
    cartCount: {
        background : 'yellow',
        borderRadius : '50%',
        padding : '4px 8px',
        position : 'absolute',
        right : 15,
        top : -9
    }
};

export default Navbar;
