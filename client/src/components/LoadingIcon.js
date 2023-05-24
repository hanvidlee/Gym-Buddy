import React from "react";
import logoPng from '../Img/logo.png';
import { CardContent, Card } from "@mui/material";
import "./Loading.scss";
import './Home.scss';

export default function Loading() {

  return (
    <CardContent class='home-wrapper'>
      <img
        src={logoPng}
        alt="Loading"
        className="spinner"
        style={{ marginTop: "180px" }}
      />
    </CardContent>
  );
}