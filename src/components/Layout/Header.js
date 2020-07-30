import React, { Component } from "react";


import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import ProfileMenu from "../HorizontalMenu/profileMenu";

import logo from "../../assets/images/Management.png";
//import logo from "../../assets/images/logo.svg";
// import logoDark from "../../assets/images/logo-dark.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

//i18n
//import { withNamespaces } from 'react-i18next';

// Redux Store

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false
    };
    this.toggleScreen = this.toggleScreen.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleScreenCallback () {
    if (this.props.leftSideBarType === "default") {
      this.props.changeSidebarType("condensed", this.state.isMobile);
    } else if (this.props.leftSideBarType === "condensed") {
      this.props.changeSidebarType("default", this.state.isMobile);
    }
  };
  
  toggleScreen() {
    this.props.toggleScreenCallback();
  }
  
  toggleSearch() {
    this.setState({ isSearch: !this.state.isSearch });
  }

  toggleMenu() {
    this.props.openLeftMenuCallBack();
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">

                <a href="/" className="logo p-0">
                  <span className="logo-lg">
                    <img src={logo} alt="" height="50" />
                  </span>
                </a>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse"
                onClick={this.toggleMenu}
                data-target="#topnav-menu-content">
                <i className="fa fa-fw fa-bars"></i>
              </button>


              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                  <span className="fa fa-search"></span>
                </div>
              </form>
              {/* isMobile */}
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <button onClick={() => { this.setState({ isSearch: !this.state.isSearch }); }} type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown">
                  <i className="fa fa-search"></i>
                </button>
                <div className={this.state.isSearch ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"}
                  aria-labelledby="page-header-search-dropdown">

                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit"><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* endShow */}
            </div>

            <div className="d-flex">
              <div className="dropdown d-none d-lg-inline-block ml-1">
                  <button type="button" onClick={this.props.toggleScreen} className="btn header-item noti-icon waves-effect">
                    <i className="fa fa-retweet"></i>
                  </button>
                </div>
              <Dropdown className="d-none d-lg-inline-block ml-1" isOpen={this.state.socialDrp} toggle={() => { this.setState({ socialDrp: !this.state.socialDrp }) }}>
                <DropdownToggle className="btn header-item noti-icon waves-effect" caret tag="button">
                  <i className="fa fa-cubes "></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg" right>
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <a className="dropdown-icon-item" to="#">
                          <img src={github} alt="Github" />
                          <span>BPM</span>
                        </a>
                      </Col>
                      <Col>
                        <a className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>HRM</span>
                        </a>
                      </Col>
                      <Col>
                        <a className="dropdown-icon-item" to="#">
                          <img src={dribbble} alt="dribbble" />
                          <span>CRM</span>
                        </a>
                      </Col>
                    </Row>
                    <Row className="no-gutters">
                      <Col>
                        <a className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>ERP</span>
                        </a>
                      </Col>
                      <Col>
                        <a className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>Mail</span>
                        </a>
                      </Col>
                      <Col>
                        <a className="dropdown-icon-item" to="#">
                          <img src={slack} alt="slack" />
                          <span>Slack</span>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <ProfileMenu />

            </div>
            
          </div>
        </header>

              

      </React.Fragment>
    );
  }
}
// const mapStatetoProps = state => {
//   const { layoutType } = state.Layout;
//   return { layoutType };
// };

export default (Header);
