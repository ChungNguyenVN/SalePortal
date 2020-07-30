import React, { Component } from "react";

import ReactDOM from "react-dom";


// Layout Related Components
import Header from "../../components/Layout/Header";
import Navbar from "../../components/HorizontalMenu";



import MaketingList from '../../components/maketingLists';

import Footer from "../../components/Layout/Footer";

// import Footer from "./Footer";

// import Navbar from "../HorizontalMenu";

import { Container, Row, Col } from "reactstrap";

import "../../assets/scss/theme.scss";

ReactDOM.render(<Header />, document.getElementById("Header"));
ReactDOM.render(<Navbar />, document.getElementById("Navbar"));
ReactDOM.render(<MaketingList />, document.getElementById("MaketingList"));
ReactDOM.render(<Footer />, document.getElementById("Footer"));

