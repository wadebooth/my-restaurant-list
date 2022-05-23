import { useParams } from "react-router-dom";

export default function RestaurantPage() {
  const { restaurantID } = useParams();
  return <h1>This restaurant: {restaurantID}</h1>;
}
