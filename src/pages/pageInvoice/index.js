import React, { Component } from "react";

import ReactDOM from "react-dom";


// Layout Related Components
import Header from "../../components/Layout/Header";
import Navbar from "../../components/HorizontalMenu";


import Footer from "../../components/Layout/Footer";


import "../../assets/scss/theme.scss";
import InvoiceList from "../../components/invoiceLists";

ReactDOM.render(<Header />, document.getElementById("Header"));
ReactDOM.render(<Navbar />, document.getElementById("Navbar"));
ReactDOM.render(<InvoiceList />, document.getElementById("InvoiceList"));
ReactDOM.render(<Footer />, document.getElementById("Footer"));

