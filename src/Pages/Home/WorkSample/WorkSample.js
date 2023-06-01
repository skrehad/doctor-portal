import React from "react";
import image from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const WorkSample = () => {
  return (
    <div className="mt-16 lg:mb-40">
      <div className="hero">
        <div className="hero-content lg:p-10  grid lg:grid-cols-2">
          <img
            src={image}
            alt=""
            className="lg:h-[400px] lg:w-[400px] m-auto rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSample;
