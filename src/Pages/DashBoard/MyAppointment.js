import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server-five-black.vercel.app/bookingCollections?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookingCollections", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-3xl mb-5">My Appointment</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatmentName}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td className="font-bold">$ {booking.price}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <button disabled className="btn btn-sm">
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
