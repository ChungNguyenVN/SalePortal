import React, { Component } from "react";
import { Row, Col, Collapse } from "reactstrap";

import { config} from '../../pages/environment';

import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import classname from "classnames";

//i18n
import { withNamespaces } from 'react-i18next';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (window.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown(item) {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
                            <Collapse isOpen={this.props.menuOpen} className="navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" 
                                            onClick={e => { e.preventDefault(); this.setState({ isCustomer: !this.state.isCustomer }); }} href="#"
                                        >
                                            <i className="fa fa-user-o font-size-14 mr-2"></i>Khách hàng {this.props.menuOpen}
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className={classname("dropdown-menu", { show: this.state.isCustomer })}>
                                            <a href={ config.pages.pageCustomerList } className="dropdown-item">Danh sách khách hàng</a>
                                            <a href={ config.pages.pageCustomerAddNew } className="dropdown-item">Thêm mới khách hàng</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" 
                                            onClick={e => { e.preventDefault(); this.setState({ isProduct: !this.state.isProduct }); }} href="#"
                                        >
                                            <i className="fa fa-briefcase font-size-14 mr-2"></i> Sản phẩm/ Dịch vụ {this.props.menuOpen}
                                            <div className="arrow-down"></div>
                                        </a>

                                        <div className={classname("dropdown-menu", { show: this.state.isProduct })} >
                                            <a href={ config.pages.pageProductList } className="dropdown-item">Danh sách sản phẩm</a>
                                            <a href={ config.pages.pageProductAdd } className="dropdown-item">Thêm mới sản phẩm</a>
                                            <div className="dropdown">
                                                <a to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ isService: !this.state.isService });
                                                    }}>
                                                    Dịch vụ <div className="arrow-down"></div>
                                                </a>
                                                <div className={classname("dropdown-menu", { show: this.state.isService })} >
                                                    <a href={ config.pages.pageProductList } className="dropdown-item">Danh sách dịch vụ</a>
                                                    <a href={ config.pages.pageProductList } className="dropdown-item">Dịch vụ đã dừng</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" 
                                            onClick={e => { e.preventDefault(); this.setState({ isMaketing: !this.state.isMaketing }); }} href="#"
                                        >
                                            <i className="fa fa-line-chart font-size-14 mr-2"></i> Thị trường {this.props.menuOpen}
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className={classname("dropdown-menu", { show: this.state.isMaketing })}>
                                            <a href={ config.pages.pageMaketing } className="dropdown-item">Danh sách kế hoạch</a>
                                            <a href={ config.pages.pageMaketing } className="dropdown-item">Danh sách yêu cầu thanh toán</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" 
                                            onClick={e => { e.preventDefault(); this.setState({ isBilling: !this.state.isBilling }); }} href="#"
                                        >
                                            <i className="fa fa-file-text-o font-size-14 mr-2"></i> Hóa đơn {this.props.menuOpen}
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className={classname("dropdown-menu", { show: this.state.isBilling })}>
                                            <a href={ config.pages.pageInvoiceList } className="dropdown-item">Danh sách hóa đơn</a>
                                            <a href="" className="dropdown-item">Danh sách đã thanh toán</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" 
                                            onClick={e => { e.preventDefault(); this.setState({ isSupport: !this.state.isSupport }); }} href="#"
                                        >
                                            <i className="fa fa-life-ring font-size-14 mr-2"></i> Trợ giúp {this.props.menuOpen}
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className={classname("dropdown-menu", { show: this.state.isSupport })}>
                                            <a href={ config.pages.pageHelp } className="dropdown-item">Danh sách yêu cầu</a>
                                            <a href={ config.pages.pageHelp } className="dropdown-item">Danh sách trợ giúp</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" 
                                            onClick={e => { e.preventDefault(); this.setState({ isReport: !this.state.isReport }); }} href="#"
                                        >
                                            <i className="fa fa-pie-chart font-size-14 mr-2"></i> Báo cáo {this.props.menuOpen}
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className={classname("dropdown-menu", { show: this.state.isReport })}>
                                            <a href={ config.pages.pageReports } className="dropdown-item">Thống kê hóa đơn</a>
                                            <a href={ config.pages.pageReportCustomer } className="dropdown-item">Thống kê khách hàng</a>
                                            <a href={ config.pages.pageReportProduct } className="dropdown-item">Thống kê sản phẩm</a>
                                        </div>
                                    </li>
                                </ul>
                            </Collapse>
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
