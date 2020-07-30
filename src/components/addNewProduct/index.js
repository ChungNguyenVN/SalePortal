import React, { Component } from 'react';
import {  Row, Col, Card,CardHeader, CardBody, CardTitle, CardText, Collapse } from "reactstrap";
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customchk: true,
            isProduct: false,
            isCompany: false,
            isBilling: false,
            isContact: false
        };
        this.showProduct = this.showProduct.bind(this);
        this.showCompany = this.showCompany.bind(this);
        this.showBilling = this.showBilling.bind(this);
        this.showContact = this.showContact.bind(this);
    }

    removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    
    showProduct() {
        this.setState({
            isProduct: !this.state.isProduct
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
                <Breadcrumbs title="Trang chủ" breadcrumbItem="Tạo mới sản phẩm"/>
                <Card>
                    
                    <CardBody>
                        <form action="" method="post">
                            {/* Personal  */}
                            <Card outline color="info" className="border">
                                <CardBody>
                                    <CardTitle className="mb-3" onClick={ this.showProduct } >
                                        <i className="fa fa-cube mr-2"> </i>Thông sản phẩm
                                        <span className={ "float-right " + (!this.state.isProduct ? 'fa fa-chevron-down' : 'fa fa-chevron-up')}></span>
                                    </CardTitle>
                                    <Collapse isOpen = { this.state.isProduct } >
                                        <Row>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Tên sản phẩm<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="text" defaultValue="" placeholder="Tên sản phẩm"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Mã sản phẩm<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="number" defaultValue="" placeholder="Mã sản phẩm"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Ngày nhập <span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="datetime-local"  id="example-datetime-local-input" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-4 col-form-label"> Ngày xuất<span className="text-danger">*</span>:</label>
                                                    <div className="col-md-8">
                                                        <input className="form-control" type="datetime-local"  id="example-datetime-local-input" />
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
export default NewProduct;