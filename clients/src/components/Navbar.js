import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../data/action";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
} from "mdbreact";

export default () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    name: "",
    phone_number: "",
    email: "",
    category: "",
  });
  const location = useLocation();

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    toggle();
    dispatch(add(state));
  };

  return (
    <>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Contact App</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active={location.pathname === "/" ? true : false}>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              active={location.pathname === "/friends" ? true : false}
            >
              <MDBNavLink to="/friends">Friends</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={location.pathname === "/work" ? true : false}>
              <MDBNavLink to="/work">Work</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <div
                onClick={toggle}
                style={{ color: "white", cursor: "pointer" }}
              >
                <MDBIcon icon="user-plus" /> Add Contact
              </div>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      {/* MODAL */}

      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Add Contact</MDBModalHeader>
        <MDBModalBody>
          <MDBRow>
            <MDBCol md="12">
              <form onSubmit={submit}>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    icon="user"
                    group
                    type="text"
                    onChange={handleChange}
                    name="name"
                    required
                  />
                  <MDBInput
                    label="Phone Number"
                    icon="phone"
                    group
                    type="text"
                    onChange={handleChange}
                    name="phone_number"
                    required
                  />
                  <MDBInput
                    label="Email"
                    icon="envelope"
                    group
                    type="email"
                    onChange={handleChange}
                    name="email"
                    required
                  />
                  <select
                    className="custom-select mb-3"
                    onChange={handleChange}
                    name="category"
                    required
                  >
                    <option selected disabled>
                      Select Category
                    </option>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Work">Work</option>
                  </select>
                </div>
                <div className="text-center">
                  <MDBBtn outline type="submit">
                    ADD CONTACT
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    </>
  );
};
