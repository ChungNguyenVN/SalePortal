import React, { Component } from "react";

import ReactDOM from "react-dom";


// Layout Related Components
import Header from "../../components/Layout/Header";
import Navbar from "../../components/HorizontalMenu";
import Breadcrumbs from '../../components/Breadcrumb/Breadcrumb';


import ChartCustomer from '../../components/Reports/reportCustomer/reportCustomer';

import Footer from "../../components/Layout/Footer";

// import Footer from "./Footer";

// import Navbar from "../HorizontalMenu";

import { Container, Row, Col } from "reactstrap";

import "../../assets/scss/theme.scss";
//Import Breadcrumb
// import Breadcrumbs from '../Breadcrumb/Breadcrumb';

ReactDOM.render(<Header />, document.getElementById("Header"));
ReactDOM.render(<Navbar />, document.getElementById("Navbar"));
// ReactDOM.render(<Breadcrumbs />, document.getElementById("Breadcrumbs"));
ReactDOM.render(<ChartCustomer />, document.getElementById("ChartCustomer"));
ReactDOM.render(<Footer />, document.getElementById("Footer"));

