import React,{useState} from 'react';
import './Nav.css';

function Nav(props){
    return (
        <div className='Navbar'>
            <h1>e Basket</h1>
            <div className='Cart'><p>{props.value}</p></div>
        </div>
    );
}

export default Nav;