import React, { Component } from 'react';
import {  Row, Col, Card,CardHeader, CardBody, CardTitle, CardText, Collapse } from "reactstrap";
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customchk: true,
            isPersonal: false,
            isCompany: false,
            isBilling: false,
            isContact: false
        };
        this.showPersonal = this.showPersonal.bind(this);
        this.showCompany = this.showCompany.bind(this);
        this.showBilling = this.showBilling.bind(this);
        this.showContact = this.showContact.bind(this);
    }

    removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    
    showPersonal() {
        this.setState({
            isPersonal: !this.state.isPersonal
        });
    }

    showCompany() {
        this.setState({
            isCompany: !this.state.isCompany
        });
    }

    showBilling() {
        this.setState({
            isBilling: !this.state.isBilling
        });
    }

    showContact() {
        this.setState ({
            isContact: !this.state.isContact
        });
    }

    render(){
        return(
            <React.Fragment>
                <Breadcrumbs title="Trang chủ" breadcrumbItem="Tạo mới khách hàng"/>
                <Card>
                    
                    <CardBody>
                        <form action="" method="post">
                            {/* Personal  */}
                            <Card outline color="info" className="border">
                                <CardBody>
                                    <CardTitle className="mb-3" onClick={ this.showPersonal } >
                                        <i className="fa fa-user mr-2"> </i>Thông tin cá nhân
                                        <span className={ "float-right " + (!this.state.isPersonal ? 'fa fa-chevron-down' : 'fa fa-chevron-up')}></span>
                                    </CardTitle>
                                    <Collapse isOpen = { this.state.isPersonal } >
                                        <Row>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Tên người dùng<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="Tên người dùng"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Địa chỉ e-mail<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="number" defaultValue="" placeholder="e-mail"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Họ <span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="Họ tên đệm"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Tên<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="number" defaultValue="" placeholder="Tên chính"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Mật khẩu <span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="password" defaultValue="" placeholder="******"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Nhắc lại mật khẩu<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="password" defaultValue="" placeholder="******"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg="12">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-2 col-form-label">Công ty</label>
                                                    <div className="col-md-10">
                                                        <select className="form-control">
                                                            <option>Chọn</option>
                                                            <option>Large select</option>
                                                            <option>Small select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </CardBody>
                            </Card>

                            {/* Company */}
                            <Card outline color="info" className="border">
                                <CardBody>
                                    <CardTitle className="mb-3" onClick={ this.showCompany } >
                                        <i className="fa fa-building-o mr-2"> </i>Thông tin công ty
                                        <span className={ "float-right " + (!this.state.isCompany ? 'fa fa-chevron-down' : 'fa fa-chevron-up')}></span>
                                    </CardTitle>
                                    <Collapse isOpen= { this.state.isCompany }>
                                        <Row>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Tên công ty<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="Tên công ty"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Website<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="http://tsg.net.vn"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg="12">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-2 col-form-label">Domain Microsoft</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="http://tsg.net.vn"/>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </CardBody>
                            </Card>

                            {/* Billing Address */}
                             <Card outline color="info" className="border">
                                <CardBody>
                                    <CardTitle className="mb-3" onClick= { this.showBilling }>
                                        <i className="fa fa-university mr-2"> </i>Địa chỉ thanh toán
                                        <span className={ "float-right " + (!this.state.isBilling ? 'fa fa-chevron-down' : 'fa fa-chevron-up')}></span>
                                    </CardTitle>
                                    <Collapse isOpen = { this.state.isBilling }>
                                        <Row>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Địa chỉ 01<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="Địa chỉ"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Địa chỉ 02<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="Địa chỉ"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label">Quận/huyện</label>
                                                    <div className="col-md-8">
                                                        <select className="form-control">
                                                            <option>Chọn</option>
                                                            <option>Large select</option>
                                                            <option>Small select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label">Tỉnh/Thành phố</label>
                                                    <div className="col-md-8">
                                                        <select className="form-control">
                                                            <option>Chọn</option>
                                                            <option>Large select</option>
                                                            <option>Small select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </CardBody>
                            </Card>

                            {/* Contact Info */}
                            <Card outline color="info" className="border">
                                <CardBody>
                                    <CardTitle className="mb-3" onClick= { this.showContact }>
                                        <i className="fa fa-phone mr-2"> </i>Thông tin liên lạc
                                        <span className={ "float-right " + (!this.state.isContact ? 'fa fa-chevron-down' : 'fa fa-chevron-up')}></span>
                                    </CardTitle>
                                    <Collapse isOpen = { this.state.isContact }>
                                        <Row>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Điện thoại<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="number" defaultValue="" placeholder="Số điện thoại di động"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Điện thoại cố định<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="number" defaultValue="" placeholder="Số điện thoại cố định"/>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Collapse>
                                </CardBody>
                            </Card>

                            <Row>
                                <Col lg="12">
                                    <div className="button-items mt-2 mb-2 text-center">
                                        <button className="waves-effect btn btn-warning btn-md waves-light">
                                            <i className="fa fa-floppy-o mr-1 align-middle text-white font-size-14"></i>Lưu
                                        </button>
                                        <button href=""className="waves-effect btn btn-primary btn-md waves-light">
                                            <i className="fa fa-paper-plane-o mr-1 align-middle text-white font-size-14"></i>Tạo mới
                                        </button>
                                        <button href=""className="waves-effect btn btn-secondary btn-md waves-light">
                                            <i className="fa fa-close mr-1 align-middle text-white font-size-14"></i>Hủy bỏ
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}
export default AddNew;