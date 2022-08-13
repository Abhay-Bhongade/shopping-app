import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, ADD } from "../../redux/actions/actions";
import { Button } from "react-bootstrap";
import "./WishLists.css";

import Swal from "sweetalert2";

function WishLists() {
  const getdata1 = useSelector((state1) => state1.wishreducer.wishLists);

  const dispatch = useDispatch();

  const deleteitem = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result = dispatch(DELETE(e.id))) => {
      if (result.isConfirmed) {
        dispatch(DELETE(e.id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const additem = (e) => {
    dispatch(ADD(e));
    dispatch(DELETE(e.id));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item Added to Cart",
      showConfirmButton: false,
      timer: 700,
    });
  };

  return (
    <>
      {/* <Navbar style={{ background: "#f1f2f6" }}>
        <Container>
          <Navbar.Brand href="#">
            <h3>Your WishLists</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/">
                Back to Home <AiOutlineArrowRight />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      {getdata1.length ? (
        <>
          <div className="container" style={{ marginTop: "6rem" }}>
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-4 mb-lg-0 border">
                {getdata1.map((e) => {
                  return (
                    <>
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-4 mb-4 mb-lg-0 "
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src={e.image}
                            style={{
                              width: "15rem",
                              height: "15rem",
                              margin:'auto'
                            }}
                            alt=""
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
                          <h5 className="head">Description</h5>
                          <p className="data">{e.name}</p>
                          <p className="datas">{e.description}</p>
                          <p className="data1">Price : Rs.{e.price}/-</p>
                        </div>
                        <div className="col-lg-2 col-md-2 mb-4 mb-lg-0 centerplace">
                          <Button
                            variant="dark"
                            style={{ fontSize: "15px", borderRadius: "0px" }}
                            className="newmove"
                            onClick={() => additem(e)}
                          >
                            Move To Cart
                          </Button>
                        </div>
                        <div className="col-lg-2 col-md-2 mb-4 mb-lg-0  centerplace">
                          <Button
                            variant="dark"
                            style={{ fontSize: "15px", borderRadius: "0px" }}
                            className="newmove"
                            onClick={() => deleteitem(e)}
                          >
                            Remove
                          </Button>
                        </div>
                        <hr />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="empty">
            <h2>Your Wish-List is Empty</h2>
            
            <img src="./7Hrr.gif" width="40%" height="20%" alt='' />
            
          </div>
        </>
      )}
    </>
  );
}

export default WishLists;
