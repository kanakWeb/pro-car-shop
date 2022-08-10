import React from "react";
import baner from "../Slider/SliderImages/1.png";

const Slider = () => {
	return (
		<marquee>
		<div class="carousel carousel-center max-w p-4 m-1 my-5 space-x-4 rounded-box">
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div> 
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div> 
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div> 
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div> 
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div> 
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div> 
  <div class="carousel-item">
    <img src="https://placeimg.com/250/180/arch" class="rounded-box" />
  </div>
</div>
		</marquee>
	);
};

export default Slider;
