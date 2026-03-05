import React from "react";
import { useStore } from "../store/useStore";

const SeatGrid = ({ movieId }) => {
  const totalSeats = 30;
  const selectSeat = useStore((state) => state.selectSeat);
  const seatSelections = useStore((state) => state.seatSelections);

  const currentSelectedSeat = seatSelections[movieId];

  const handleSeatClick = (seatNumber) => {
    selectSeat(movieId, seatNumber);
  };
  return (
    <div className="seat-grid-container">
      <div className="grid-layout">
        {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seatNum) => (
          <button
            key={seatNum}
            onClick={() => handleSeatClick(seatNum)}
            className={`seat-button ${currentSelectedSeat === seatNum ? "selected" : ""}`}
          >
            {seatNum}
          </button>
        ))}
      </div>
      {currentSelectedSeat && (
        <p className="selection-summary">
          Your seat for this movie: {currentSelectedSeat}
        </p>
      )}
    </div>
  );
};

export default SeatGrid;