import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { MDBContainer } from "mdbreact";

export default () => {
  const contacts = useFetch();
  const location = useLocation();
  let conditon;

  if (location.pathname === "/") conditon = "Family";
  else if (location.pathname === "/friends") conditon = "Friends";
  else conditon = "Work";

  const filtered = contacts.filter((i) => i.category === conditon);

  return (
    <MDBContainer fluid className="mt-3 d-flex flex-wrap">
      {filtered.map((value) => {
        return <Card contact={value} />;
      })}
    </MDBContainer>
  );
};
