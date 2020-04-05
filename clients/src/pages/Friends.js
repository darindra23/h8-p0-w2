import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { MDBContainer } from "mdbreact";

export default () => {
  const contacts = useFetch();
  const friends = contacts.filter((i) => i.category === "Friends");

  return (
    <MDBContainer fluid className="mt-3 d-flex flex-wrap">
      {friends.map((value) => {
        return <Card contact={value} key={value.id} />;
      })}
    </MDBContainer>
  );
};
