import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RestauarantCard from "./RestauarantCard";

export default function RestaurantPage() {
  const { restaurantID } = useParams();
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    //fetch restaurant by id
    fetch(`https://my-first-firestore-wb.web.app/restaurants/${restaurantID}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data))
      .catch(console.error);
  }, [restaurantID]);
  return (
    <>
      <Link to="/"> &lt; Back</Link>
      <RestauarantCard restaurant={restaurant} />;
    </>
  );
}
