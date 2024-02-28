import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Componets/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const ClientReview = () => {
  const { reviews, setReview } = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);fsdfsd
  
  return (
    <div>
      <SectionTitle
        heading={"From our clients"}
        subHeading={"Testimonials"}
      ></SectionTitle>
      
      review: {reviews.length}

      {/* <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((review) => (
            <SwiperSlide>{review.name}</SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default ClientReview;
