import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd'

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
        <section>
        <Row>
            {!restaurants
            ?<h2>Loading...</h2>
            : restaurants.map(restaurant => (
                <Col style={{ width: '300px', margin: '1em' }} key={restaurant.id}>
              
                <Card 
                cover={<img alt= {`Typical meal at ${restaurant.name}`} src={restaurant.image} />}
                hoverable>
                    <Card.Meta title ={restaurant.name} description={restaurant.address} />
                </Card>
                </Col>
                )
            )}
            </Row>
        </section>
    )
}


export default RestaurantList;