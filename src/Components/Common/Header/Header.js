import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
// import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import axios from "axios";
import httpRequest from "../../../utils/httpRequest";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../redux/actions/authAction";

function Header() {
  const [price, setPrice] = useState(0);
  const [lgShow, setLgShow] = useState(false);

  const getdata = useSelector((state) => state.cartreducer.carts);
  const getdata1 = useSelector((state1) => state1.wishreducer.wishLists);

  const url="http://7d16-2405-201-300b-e015-d4e2-8b5f-9fbc-b908.ngrok.io/api/login"
  const [data, setData] = useState({
      
      email:'',
      password:'',
     
  })
  function handle(e) {
      const newdata = {...data}
      newdata[e.target.id]= e.target.value
      setData(newdata)
      console.log(newdata)
  }
  const dispatch = useDispatch()

  function login(e) {
      e.preventDefault();
      httpRequest.post("/login", {
         
          email: data.email,
          password: data.password,
          
      })
      .then(res=> {
          dispatch(setAuth({isAuth:true,token:res.data.data.authorization.token}))
          console.log(res.data)
      }) 
      
  }

  const navigate = useNavigate();

  const movetocart = () => {
    navigate("/shoppingCart");
  };

  const movetowishlist = () => {
    navigate("/wish");
  };

 

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          zIndex: "1",
          background: "#FFF",
          position: "fixed",
          width: "100%",
          top: "0",
        }}
      >
        <Navbar.Brand href="/" className="logo animate-charcter">
          BuyBags
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginRight: "1rem" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "auto" }}>
            <Nav.Link href="/" className="headbtn">
              Home
            </Nav.Link>
            <Nav.Link href="/ourproducts" className="headbtn">
              Categories
            </Nav.Link>
            <Nav.Link href="/ourproducts" className="headbtn">
              Products
            </Nav.Link>
            <Nav.Link href="/about" className="headbtn">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="headbtn">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <div>
              <Badge badgeContent={getdata.length} color="primary">
                <FaShoppingCart
                  style={{
                    margin: "1rem",
                    width: "20px",
                    height: "20px",
                    color: "#000",
                  }}
                  onClick={() => movetocart()}
                  className="me-2"
                />
              </Badge>
              <Badge badgeContent={getdata1.length} color="primary">
                <BsFillHeartFill
                  style={{ margin: "1rem", width: "20px", height: "20px" }}
                  onClick={() => movetowishlist()}
                  className="me-2"
                />
              </Badge>
              <BsFillPersonFill
                style={{ margin: "1rem", width: "20px", height: "20px" }}
                onClick={() => setLgShow(true)}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body closeButton style={{ marginTop: "2rem" }}>
          <h3 className="heading">Login To BuyBags</h3>
          <div className="shead">LOGIN WITH YOUR SOCIAL MEDIA ACCOUNT</div>

          <div className="btndiv">
            <button className="social">Sign in with Facebook</button>
            <button className="social1">Sign in with Google</button>
          </div>
          <div style={{ marginTop: "2rem" }} className="shead">
            OR LOGIN WITH YOUR EMAIL ACCOUNT
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 ">
              <p className="fhead">Email ID </p>
              <div className='inputdiv'>
              <input className="field" onChange={(e)=>handle(e)} id="email" value={data.email}/>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 ">
              <p className="fhead" style={{marginTop:'.2rem'}}>Password </p>
              <div className='inputdiv'>
              <input className="field" onChange={(e)=>handle(e)} id="password" value={data.password}/>
              </div>
            </div>

            {/* <div
              className="col-lg-12 col-md-12 inputdiv1"
              style={{ marginTop: "0rem" }}
            >
              <p className="fhead">Password </p>
              <div className='inputdiv'><input className="field" /></div>
              
            </div> */}
             <div className="col-lg-12 logBtn">
            <Button
              style={{ width:'80%',
                height:'2.5rem', borderRadius: '0px'}}
              variant="dark"
              onClick={(e) => login(e)}
            >
              SIGN IN
            </Button>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'5rem', paddingRight:'5rem'}}>
              <p>Existing BuyBegs Customer?<br/>
                <Link  style={{textDecoration: 'none'}} to='/forget'>Recover Password</Link>
                 </p>
                 <p>New To BuyBegs?<br/>
                <Link style={{textDecoration: 'none'}} to='/register'>Create Account</Link>
                 </p>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
