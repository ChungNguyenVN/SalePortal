import React, { Component } from "react";

import ReactDOM from "react-dom";


// Layout Related Components
import Header from "../../components/Layout/Header";
import Navbar from "../../components/HorizontalMenu";
import Breadcrumbs from '../../components/Breadcrumb/Breadcrumb';


import Reports from '../../components/Reports';

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
ReactDOM.render(<Reports />, document.getElementById("Reports"));
ReactDOM.render(<Footer />, document.getElementById("Footer"));

