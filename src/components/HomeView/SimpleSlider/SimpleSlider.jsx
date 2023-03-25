import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <img src="/media/pexels-quang-nguyen-vinh-2166456.jpg" />
        <div className="overlay"></div>
        <div className="content">
          <h2>Gifts with a Personal Touch</h2>
          <p>Find the perfect gift for your loved ones among our handpicked collection of artisanal creations. Show your appreciation with a thoughtful, personalized present that speaks from the heart.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/media/pexels-andrea-piacquadio-3811832.jpg" />
        <div className="overlay"></div>
        <div className="content">
          <h2>Discover Handcrafted Treasures</h2>
          <p>Explore a unique selection of artisan-made products, crafted with love and care by skilled local artisans. Support local talent and bring home a one-of-a-kind masterpiece.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/media/pexels-gül-işık-3084342.jpg" />
        <div className="overlay"></div>
        <div className="content">
          <h2>Savor Local Flavors</h2>
          <p>Delight your taste buds with authentic, locally-sourced food and beverages. Experience the rich heritage and culture of our region through every delicious bite and sip.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/media/pexels-valeria-ushakova-3094225.jpg" />
        <div className="overlay"></div>
        <div className="content">
          <h2>Eco-Friendly & Sustainable</h2>
          <p>Shop guilt-free knowing that our products are made with sustainable materials and eco-friendly practices. Embrace a greener lifestyle and make a positive impact on our planet.</p>
        </div>
      </div>

    </Slider>
  );
}