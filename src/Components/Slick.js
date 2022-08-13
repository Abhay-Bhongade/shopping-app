import React,{useState} from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import products from "./Cardsdata";
import './styles.css'


export default function Slick() {
    const [item, setItem] = useState(products);

  var settings = {
    dots: false,
    infinite: true,
    
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <Slider {...settings} >
       {item.map((element, id) => {
          return (
            <>
              <Card
                style={{
                  width: "22rem",
                  border: "none",
                  
                  
                }}
                className="mx-2 mt-4 card_style box"
              >
                <Card.Img
                  variant="top"
                  src={element.image}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
               <Card.Body>
               <Card.Title
                    style={{ marginTop: "3rem", textAlign: "center" }}
                  >
                    {element.name}
                  </Card.Title>
               </Card.Body>
                </Card> 
                </> )})}
        
    </Slider>
  );
}