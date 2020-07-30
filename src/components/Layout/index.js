import React, { Component } from "react";




// Layout Related Components
import Header from "./Header";

import Footer from "./Footer";

import Navbar from "./Navbar";

import { Container, Row, Col } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../Breadcrumb/Breadcrumb';


import Filter from '../FilterList';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showScreen: true ,
      isMenuOpened: false
    }
    this.toggleScreen = this.toggleScreen.bind(this);
    this.openMenu =  this.openMenu.bind(this);
  }

  

  componentDidMount() {

    if (this.props.isPreloader === true) {
      document.getElementById('preloader').style.display = "block";
      document.getElementById('status').style.display = "block";

      setTimeout(function () {

        document.getElementById('preloader').style.display = "none";
        document.getElementById('status').style.display = "none";

      }, 2500);
    }
    else {
      document.getElementById('preloader').style.display = "none";
      document.getElementById('status').style.display = "none";
    }
  }

  toggleScreen() {
    this.setState({ showScreen: !this.state.showScreen });
  }

  openMenu(e) {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  };

  render() {
    return (
        <React.Fragment>
            <div id="preloader">
                <div id="status">
                    <div className="spinner-chase">
                        <div className="chase-dot"></div>
                        <div className="chase-dot"></div>
                        <div className="chase-dot"></div>
                        <div className="chase-dot"></div>
                        <div className="chase-dot"></div>
                        <div className="chase-dot"></div>
                    </div>
                </div>
            </div>
          <div id="layout-wrapper">
                <Header 
                  toggleScreen={this.toggleScreen}
                  isMenuOpened={this.state.isMenuOpened}
                  openLeftMenuCallBack={this.openMenu}
                />

                <Navbar menuOpen={this.state.isMenuOpened}/>
                <div className="main-content">
                    <div className="page-content 02">
                        <div className={this.state.showScreen ? "container-fluid" : "container-full"}>
                            <Row>
                              <Col lg="12">
                                  <Breadcrumbs title="Trang chủ" breadcrumbItem="Danh sách khách hàng" className="mt-5" />
                              </Col>
                              <Col lg="12">
                                  <Filter/>
                              </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                
                <Footer />
          </div>  
        </React.Fragment>
    );
  }
}


export default Layout;

