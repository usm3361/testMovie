import { useParams } from "react-router";
import SeatGrid from "../components/SeatGrid.jsx";

const Seats = () => {
  const { id } = useParams();

  return (
    <div className="seats-page">
      <h2>Choose your Seat</h2>
      <SeatGrid movieId={id} />
    </div>
  );
};

export default Seats;
