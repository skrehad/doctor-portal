import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      className="py-20 "
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center lg:w-[450px] md:w-[450px] m-auto">
        <p className="text-primary mb-2 text-xl font-bold">Contact Us</p>
        <p className="text-3xl text-white mb-8 font-bold">
          Stay connected with us
        </p>
        <div className="px-4">
          <input
            type="text"
            placeholder="Email Address"
            className=" input mb-6 input-bordered w-full "
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input mb-6 input-bordered w-full "
          />
          <br />
          <textarea
            placeholder="Your Message"
            className="textarea mb-8 textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <PrimaryButton>SUBMIT</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
