import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { MDBContainer } from "mdbreact";

export default () => {
  const contacts = useFetch();
  const work = contacts.filter((i) => i.category === "Work");

  return (
    <MDBContainer fluid className="mt-3 d-flex flex-wrap">
      {work.map((value) => {
        return <Card contact={value} key={value.id} />;
      })}
    </MDBContainer>
  );
};
