import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Card = ({ appartment }) => {

  return (
    <div className="w-96 text-xl mb-20">
      <Link to={"/room/" + appartment.id}>
        <ImageSlider images={appartment.images.split(",")} />
      </Link>
      <div className="flex justify-between items-start mt-2">
        <p className="font-semibold capitalize">{appartment.name}</p>
        <p className="flex items-center">
          <FaStar className="mr-2" />
          New
        </p>
      </div>
      <p className="text-gray-500">{appartment.timestamp}</p>
      <p>
        <b className="font-semibold">{appartment.price}</b>
      </p>
    </div>
  );
};

export default Card;
