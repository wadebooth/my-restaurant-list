import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card, Rate } from "antd";
import { UserContext } from "../App";
const { Meta } = Card;

export default function RestauarantCard({ restaurant }) {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  useContext(UserContext);
  return (
    <Col style={{ width: "300px", margin: "1em" }} key={restaurant?.id}>
      <Card
        onClick={() => navigate(`/restaurants/${restaurant?.id}`)}
        cover={
          <img
            alt={`Typical meal at ${restaurant.name}`}
            src={restaurant?.image}
          />
        }
        hoverable
      >
        <Meta title={restaurant?.name} description={restaurant?.address} />
        {user && <Rate />}
      </Card>
    </Col>
  );
}
