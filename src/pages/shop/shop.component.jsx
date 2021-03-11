import React from 'react';
import SHOP_DATA from './shop.data.js';

class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            shopcollection : SHOP_DATA;
        }
    }

    render(){
        return(
            <div>
                Shop Collection
            </div>
        )
    }
}

