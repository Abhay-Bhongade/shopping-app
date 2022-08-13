import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { MdSend } from "react-icons/md";
import "./footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  const movetocart = () => {
    navigate("/cart");
  };

  const movetowishlist = () => {
    navigate("/wish");
  };
  return (
    <div className="fmain">
      <div className="row" style={{ marginRight: "0rem" }}>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 one">
          <div>
            <p>ABOUT US</p>
          </div>
          <div className="size">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
          </div>
          <div>
            <AiFillFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiOutlineInstagram className="icon" />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 two">
          <div>
            <p>INFORMATION</p>
          </div>
          <div className="size">
            <div>About Us</div>
            <div style={{ marginTop: "1rem" }}>Order Tracking</div>
            <div style={{ marginTop: "1rem" }}>Privecy and Policy</div>
            <div style={{ marginTop: "1rem" }}>Terms & Conditions</div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 two">
          <div>
            <p>MY ACCOUNT</p>
          </div>
          <div className="size">
            <div>Login</div>
            <div style={{ marginTop: "1rem" }} onClick={() => movetocart()}>
              My Cart
            </div>
            <div style={{ marginTop: "1rem" }}>My Account</div>
            <div style={{ marginTop: "1rem" }} onClick={() => movetowishlist()}>
              Wishlist
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 two ">
          <div>
            <p>NEWSLETTER</p>
          </div>
          <div>
            <input placeholder="Email Address" className="input" />
          </div>
          <div>
            <button className="fbtn">
              <MdSend style={{ marginRight: "0.5rem", marginTop: "-0.2rem" }} />
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
