import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../data/action";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

export default (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const detail = () => {
    history.push({
      pathname: `/detail/${props.contact.id}`,
      state: props.contact,
    });
  };

  const hapus = () => {
    dispatch(remove(props.contact.id));
  };

  return (
    <MDBCol className="col-3 m-3">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.contact.name}</MDBCardTitle>
          <MDBCardText>
            <strong>Phone Number :</strong> &nbsp; {props.contact.phone_number}
          </MDBCardText>
          <div>
            <MDBIcon
              icon="address-book"
              onClick={detail}
              style={{ cursor: "pointer" }}
            ></MDBIcon>{" "}
            <span onClick={detail} style={{ cursor: "pointer" }}>
              Detail
            </span>
            <MDBIcon
              className="float-right"
              icon="trash-alt"
              onClick={hapus}
              style={{ cursor: "pointer" }}
            ></MDBIcon>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};
