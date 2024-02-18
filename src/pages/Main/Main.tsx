import "./Main.css";

import React from "react";

import { Container } from "../../components/Container/Container";
export const Main = () => {
  return (
    <Container>
      <h1>
        <span className={"font-normal"}>Weather</span> Forecast
      </h1>
      <p>Search</p>
      <p>List of trips</p>
      <h2 className={"font-normal"}>Week</h2>
      <p>Forecast</p>
    </Container>
  );
};
