import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <>
      <div className="carousal">
        <Carousel style={{ marginTop: "5rem" }}>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100  "
              src="https://cdn.shopify.com/s/files/1/2763/5358/files/Laptop_banner_1_153a72f7-5b62-430b-aa8a-06f76a52d770_1400x.jpg?v=1659346412"
              alt=""
              style={{ height: "70vh", objectFit: "cover" }}
            />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 "
              src="https://cdn.shopify.com/s/files/1/2763/5358/files/Laptop_banner_2_1400x.jpg?v=1659189671"
              alt="Second slide"
              style={{ height: "70vh", objectFit: "cover" }}
            />
            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/2763/5358/files/Laptop_banner_1_1400x.jpg?v=1658137117"
              alt="Third slide"
              style={{ height: "70vh", objectFit: "cover" }}
            />
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slide;
