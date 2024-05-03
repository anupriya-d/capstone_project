import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/bookings/`);
        setBookings(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const deleteBookings = async (bookingId) => {
    try {
      await axios.delete(`/bookings/${bookingId}`);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
    } catch (error) {
      console.error("Error deleting Booking:", error);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#68B984 ",
      }}
    >
      <h2>All Bookings Recieved</h2>

      {bookings.map((booking) => (
        <div key={booking._id}>
          <p>
            Booked By:{" "}
            {booking.user &&
              booking.user.length > 0 &&
              booking.user[0].firstName}
          </p>
          <p>Book-ID: {booking._id}</p>
          <p>
            Client Email:{" "}
            {booking.user && booking.user.length > 0 && booking.user[0].email}
          </p>
          <p>
            Booked Tour For:{" "}
            {booking.track &&
              booking.track.length > 0 &&
              booking.track[0].title}
          </p>
          <p>Booking Date: {booking.bookingDate}</p>
          <p>BookedAt: {booking.bookedAt}</p>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
              border: "none",
            }}
            onClick={() => deleteBookings(booking._id)}
          >
            Delete
          </button>{" "}
          {/* Delete button */}
        </div>
      ))}
    </div>
  );
};

export default DisplayBookings;
