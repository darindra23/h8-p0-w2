import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

export default () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <MDBContainer fluid className="mt-3">
      <h1>
        <strong>{location.state.name}</strong>
      </h1>
      <h4>{location.state.phone_number}</h4>
      <h4>{location.state.email}</h4>
      <h4>{location.state.category}</h4>
      <MDBBtn onClick={() => history.goBack()}>
        <MDBIcon icon="chevron-left" /> Back
      </MDBBtn>
    </MDBContainer>
  );
};
