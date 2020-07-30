import React, { Component } from "react";

import ReactDOM from "react-dom";


// Layout Related Components
import Header from "../../components/Layout/Header";
import Navbar from "../../components/HorizontalMenu";


import AddNewProduct from '../../components/addNewProduct';

import Footer from "../../components/Layout/Footer";

// import Footer from "./Footer";

// import Navbar from "../HorizontalMenu";

import { Container, Row, Col } from "reactstrap";

import "../../assets/scss/theme.scss";

ReactDOM.render(<Header />, document.getElementById("Header"));
ReactDOM.render(<Navbar />, document.getElementById("Navbar"));
ReactDOM.render(<AddNewProduct />, document.getElementById("AddNewProduct"));
ReactDOM.render(<Footer />, document.getElementById("Footer"));

