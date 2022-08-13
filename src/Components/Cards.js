import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./styles.css";
import { BsHeart, BsShareFill, BsArrowsFullscreen } from "react-icons/bs";
// import Swal from "sweetalert2";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD, ADD_WISHLIST, MOST_VIEW } from "../redux/actions/actions";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-medium-image-zoom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { listClasses, TextField } from "@mui/material";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import httpRequest from "../utils/httpRequest";
import products from "./Cardsdata";

const Cards = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  const [fitem, setFitem] = useState([]);
  const [view, setView] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [subCate, setSubcate] = useState([]);
  const [range, setRange] = useState([]);
  const [visible, setVisible] = useState(6);
  const [filterbtn, setFilterBtn] = useState(false);
  const [listcategory, setListCategory]= useState([])
  const [products,setProducts]= useState([])

  const piece = products.slice(0, visible);

  useEffect(() => {
    category();
    Products()
  }, []);

  const category = () => {
    
    httpRequest.get( "/categories" )
      .then((res) => {
        console.log(res);
        setListCategory(res.data.data)
        // setItem(res.data);
        // setFitem(res.data);
        // setSubcate(res.data);
        // setRange(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Products =()=> {
    httpRequest.get("/products").then((res)=> {
      console.log(res);
      setProducts(res.data.data)

    }).catch((err)=> {
      console.log(err)
    })
  }

  const loadmore = () => {
    setVisible(visible + 3);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  function handleShow(e) {
    console.log(e);
    setView(e);
    setFullscreen(e);
    setShow(true);
  }

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
    // axios.post("https://564575df-ff51-48b3-af97-3cb6ed776253.mock.pstmn.io/add/cart", e)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item add to cart",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const sendwish = (e) => {
    dispatch(ADD_WISHLIST(e));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item add to WishList",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const filterItems = (cateItem) => {
    const updatedItems = listcategory.find((currelement) => {
      return currelement.title === cateItem;
    });
    // console.log(">>>>>>>>>>>>>>>>>>>>",updatedItems)
     setProducts(updatedItems);
    setSubcate(updatedItems.sub_categories);
    console.log(updatedItems.sub_categories)
    setRange(updatedItems);
  };

  const filterSubItems = (subcateItem) => {
    const updatedSubItems = fitem.filter((currele) => {
      return currele.subcategory === subcateItem;
    });
    setProducts(updatedSubItems);
    setRange(updatedSubItems);
  };

  const handleprice = (a, b) => {
    const updateditemprice = range.filter((current) => {
      return current.price >= a && current.price < b;
    });
    setProducts(updateditemprice);

    console.log(a);
    console.log(b);
  };
  const newcate = subCate.map((ele) => {
    return ele.subcategory;
  });

  const subcate = [...new Set(newcate)];
  //console.log(subcate)

  const lowtohigh = () => {
    const priceltoh = [...products].sort((a, b) => a.price - b.price);
    setProducts(priceltoh);
  };

  const hightolow = () => {
    const pricelhtl = [...products].sort((a, b) => a.price - b.price).reverse();
    setProducts(pricelhtl);
  };

  const mostviewed = () => {
    const topview = [...products].sort((a, b) => a.view - b.view);
    setProducts(topview);
  };

  const showfilteritem = () => {
    setFilterBtn(!filterbtn);
  };

  return (
    <div>
      <div className="container mt-3">
        {console.log("<<<<<<<<<<<<<<<<<<<<<", subCate)}
        <h2
          className="text-center"
          style={{ marginTop: "5rem", fontFamily: "Noto Serif" }}
        >
          All Collections
        </h2>
        <Button
          style={{ borderRadius: "0px", margin: "0 auto" }}
          className="col-lg-2 filterbtn"
          variant="dark"
          onClick={() => showfilteritem()}
        >
          Filter Product
        </Button>

        {filterbtn ? (
          <>
            <div style={{ display: "flex", justifyContent:'flex-end' }}>
              <h6
                className="shown"
                style={{ fontSize: "18px", marginTop: ".5rem" }}
              >
                Sort By:
              </h6>
              <Dropdown style={{ marginLeft: "1rem", borderRadius: "0px" }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Featured
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => hightolow()}>
                    High to Low
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => lowtohigh()}>
                    Low to High
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => mostviewed()}>
                    Most Viewed
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <div>
                  <h4 className="shown">Filter</h4>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <TextField
                      id="standard-search"
                      label="Search"
                      type="search"
                      variant="standard"
                      onChange={(e) => setSearchProduct(e.target.value)}
                    />
                  </div>
                  <hr />
                  <h6
                    className="shown"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    Categories
                  </h6>
                  {/* <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>All</p>
                    <Checkbox onClick={() => setItem(fitem)} />
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>Men</p>
                    <Checkbox onClick={() => filterItems("men")} />
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>Women</p>
                    <Checkbox onClick={() => filterItems("women")} />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>Kids</p>
                    <Checkbox onClick={() => filterItems("kids")} />
                  </div> */}

{listcategory.map((ele) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p style={{ color: "#000", cursor: "pointer" }}>
                            {ele.title}
                          </p>
                          <Checkbox  onChange={() => filterItems(ele.title)}/>
                        </div>
                      </>
                    );
                  })}
                  <hr />
                  <h6
                    className="shown"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    Sub-categories
                  </h6>

                  {subCate.map((ele) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p style={{ color: "#000", cursor: "pointer" }}>
                            {ele.title}
                          </p>
                          <Checkbox onClick={() => filterSubItems(ele)} />
                        </div>
                      </>
                    );
                  })}

                  <hr />
                  <h6
                    className="shown"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    Price
                  </h6>
                  {/* <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      Below Rs.500
                    </p>
                    <Checkbox onClick={() => handleprice(0, 500)} />
                  </div> */}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      {" "}
                      Rs.500 to Rs.1000
                    </p>
                    <Checkbox onClick={() => handleprice(500, 1000)} />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      {" "}
                      Rs.1000 to Rs.10,000
                    </p>
                    <Checkbox onClick={() => handleprice(1000, 10000)} />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      {" "}
                      Rs.10,000 and Above
                    </p>
                    <Checkbox onClick={() => handleprice(10000, 20000)} />
                  </div>
                  <input type="range" onInput={ handleprice } />
                </div>
              </div>
              <hr />
            </div>
          </>
        ) : (
          <></>
        )}

        <div
          className="category sidefilter"
          style={{ marginTop: "1rem", marginRight: "0rem" }}
        >
          <div style={{ display: "flex", justifyContent:'flex-end' }}>
            <h6
              className="shown"
              style={{ fontSize: "18px", marginTop: ".5rem" }}
            >
              Sort By:
            </h6>
            <Dropdown style={{ marginLeft: "1rem", borderRadius: "0px" }}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Featured
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => hightolow()}>
                  High to Low
                </Dropdown.Item>
                <Dropdown.Item onClick={() => lowtohigh()}>
                  Low to High
                </Dropdown.Item>
                <Dropdown.Item onClick={() => mostviewed()}>
                  Most Viewed
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="row" style={{ width: "100%" }}>
        <div
          className="col-lg-3 col-md-6 sidefilter"
          style={{ paddingLeft: "4rem" }}
        >
          <div className="fixed">
            <div>
              <h4 className="shown">Filter</h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <TextField
                  id="standard-search"
                  label="Search"
                  type="search"
                  variant="standard"
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
              </div>
              <h6
                className="shown"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                Categories
              </h6>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#000", cursor: "pointer" }}>All</p>
                <Checkbox onClick={() => setItem(fitem)} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#000", cursor: "pointer" }}>Men</p>
                <Checkbox onClick={() => filterItems("men")} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#000", cursor: "pointer" }}>Women</p>
                <Checkbox onClick={() => filterItems("women")} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#000", cursor: "pointer" }}>Kids</p>
                <Checkbox onClick={() => filterItems("kids")} />
              </div> */}
              {listcategory.map((ele) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p style={{ color: "#000", cursor: "pointer" }}>
                            {ele.title}
                          </p>
                          <Checkbox onClick={() => filterItems(ele.title)} />
                        </div>
                      </>
                    );
                  })}
              <hr />
              <h6
                className="shown"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                Sub-categories
              </h6>

              { subCate.map((e) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "#000", cursor: "pointer" }}>{e?.title}</p>
                     <Checkbox onClick={() => filterSubItems()} />
                    </div>
                  </>
                );
              })}

              <hr />
              <h6
                className="shown"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                Price
              </h6>
              <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      {" "}
                      Rs.500 to Rs.1000
                    </p>
                    <Checkbox onClick={() => handleprice(500, 1000)} />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      {" "}
                      Rs.1000 to Rs.10,000
                    </p>
                    <Checkbox onClick={() => handleprice(1000, 10000)} />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#000", cursor: "pointer" }}>
                      {" "}
                      Rs.10,000 and Above
                    </p>
                    <Checkbox onClick={() => handleprice(10000, 20000)} />
                  </div>
              {/* <input type="range" onInput={ handleprice } /> */}
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-6 row d-flex justify-content-center align-items-center spacing">
          {piece
            .filter((value) => {
              if (searchProduct === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchProduct.toLowerCase())
              ) {
                return value;
              } else if (
                value.category
                  .toLowerCase()
                  .includes(searchProduct.toLowerCase())
              ) {
                return value;
              }
            })

            .map((element, id) => {
              return (
                <>
                  <Card
                    style={{
                      width: "18rem",
                      border: "none",
                      background: "rgb(230,230,230)",
                    }}
                    className="mx-2 mt-4 card_style"
                  >
                    <Card.Img
                      variant="top"
                      src={element.image}
                      style={{ height: "12rem", width:'8rem', margin:'auto' }}
                      className="mt-3 style_image"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "16px",
                        width: "20px",
                      }}
                    >
                      <div className="dot">
                        <BsHeart
                          title="wishlist"
                          className="place"
                          onClick={() => sendwish(element)}
                        />
                      </div>

                      <div className="animate__animated animate__fadeInRight sideicon">
                        <div className="dot">
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            <BsShareFill className="place" />
                          </OverlayTrigger>
                        </div>

                        <div className="dot">
                          <BsArrowsFullscreen
                            title="full view"
                            className="me-2 mb-2 place"
                            onClick={() => handleShow(element)}
                          />
                        </div>
                      </div>
                    </div>

                    <Card.Body>
                      <div className="button_div d-flex justify-content-center animate__animated animate__fadeInUp">
                        <Button
                          style={{ borderRadius: "0px" }}
                          className="col-lg-12 btnstyle"
                          variant="dark"
                          onClick={() => send(element)}
                        >
                          Add To Cart
                        </Button>
                      </div>

                      <Card.Title
                        style={{ marginTop: "3rem", textAlign: "center" }}
                      >
                        {element.title}
                      </Card.Title>
                      <Card.Text
                        style={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        Rs.{element.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{view.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                          <div className="col-lg-5 col-md-5 mb-4 mb-lg-0 ">
                            <Zoom>
                              <img
                                src={view.image}
                                alt=""
                                // style={{ marginLeft: "-50px" }}
                                width="80%"
                              />
                            </Zoom>
                          </div>

                          <div
                            className="col-lg-7 col-md-7 mb-4 mb-lg-0"
                            style={{ paddingLeft: "2rem" }}
                          >
                            <div className="item">
                              <h4 style={{ fontWeight: "bold" }}>
                                {view.title}
                              </h4>
                            </div>
                            
                            <div className="itemdetail">
                              <p>{view.description}</p>
                            </div>

                            <div>
                              <h5>Stock: {view.stock}</h5>
                            </div>
                            <div>
                              <h5>Price: Rs. {view.price}</h5>
                            </div>
                            <div>
                              <Stack spacing={1}>
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={2.5}
                                  precision={0.5}
                                  readOnly
                                />
                              </Stack>
                            </div>
                            <div>
                              <Button
                                style={{
                                  borderRadius: "0px",
                                  marginTop: "2rem",
                                }}
                                variant="dark"
                                className=" btnstyle1"
                                onClick={() => send(view)}
                              >
                                Add To Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              );
            })}
            <div style={{display:'flex'}}>
        <Button
        style={{ borderRadius: "0px", margin:'1rem auto' }}
        className="col-lg-2 "
        variant="dark"
        onClick={loadmore}
      >
        See More
      </Button>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
