import React from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  return (
    <div>
      <AppointmentBanner></AppointmentBanner>
      <AvailableAppointment></AvailableAppointment>
    </div>
  );
};

export default Appointment;
