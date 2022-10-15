import React,{useState} from 'react';
import {Card} from '../';
function CardSection(props){
    let [check,setCheck]=useState(0);
    function parentCallback(value){
       check = setCheck(value);
       console.log(value);
       props.callback(value);
    }
    return(
        <> 
           <Card itm='Phone' count={0} price='10000' callback={parentCallback} />
        </>
    );
}

export default CardSection;