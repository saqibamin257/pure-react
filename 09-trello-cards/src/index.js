import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './header';
import Card from './card';
import Footer from './footer';

//Trello Component

const Trello = ({data}) => (
        <div>
        <Header header={data.header}/>
        <Card cardList={data.card.card_itemListArray}/>
        <Footer footer={data.footer}/>
        </div>
);

Trello.propTypes={
    data:PropTypes.object
}


const card1_items =
 [
    {
        id:1,
        name: 'Subwoofer'
    },
    {
        id:2,
        name: 'Non-porous, washable'
    },
    {
        id:3,
        name: 'Wings'
    },
    {
        id:4,
        name: 'Beveled Bezel'
    },
    {
        id:5,
        name: 'Bezeled Bevel'
    },
    {
        id:6,
        name: 'Seedless'
    }
]
const card2_items = [
    {
        id:1,
        name: 'Subwoofer-2'
    },
    {
        id:2,
        name: 'Non-porous-2, washable-2'
    },
    {
        id:3,
        name: 'Wings-2'
    },
    {
        id:4,
        name: 'Beveled Bezel-2'
    },
    {
        id:5,
        name: 'Bezeled Bevel-2'
    },
    {
        id:6,
        name: 'Seedless-2'
    }
]

const testData={
    header:{
        text:"Phone Features",
        iconName:"fa-ellipsis-h"
    },
    //cardItems:testCardItems // this means cardItems is array
    //but we wanted to make it object as cardItems can have itemList array data with other data
    //let say we could have multiple cards then we will need arrayData for each card.
    card:{ 
        card_itemListArray:[
            card1_items,
            card2_items
    ]
        
        //card2_itemList:card2_items,
    },
    footer:{
        text:"Add a card",
        iconName:"fa-ellipsis-h"
    }
}

ReactDOM.render(
    <Trello data={testData} />,
    document.getElementById('root')
);