import React, { useEffect, useState } from 'react';
import { Row } from 'antd'
import RestauarantCard from './RestauarantCard';

//LIST, MAP, KEY

function RestaurantList() {
    const [restaurants, setRestaurants] = useState();
    useEffect(()=> {
        fetch('https://my-first-firestore-wb.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data) ) // data -> restaurants
        .catch(console.error)
    }, [])
//fetch our API

// data -> restaurants

    return (
        <section style={{ marginTop: '60px' }}>
        <Row>
            {!restaurants
            ?<h2>Loading...</h2>
            : restaurants.map(restaurant => <RestauarantCard restaurant={restaurant} key={restaurant.id} />)}
            </Row>
        </section>
    )
}


export default RestaurantList;