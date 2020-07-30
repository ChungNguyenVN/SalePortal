import React, { Component } from "react";

import { Row, Col, Card, CardHeader, CardBody, CardTitle, Container, Modal, Button, Collapse } from "reactstrap";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';

import { config} from '../../pages/environment';

import Breadcrumbs from '../Breadcrumb/Breadcrumb'


class HelpList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilter: false,
            modalEdit: false
        };
        this.showFilter = this.showFilter.bind(this);
        this.tog_Edit = this.tog_Edit.bind(this);
    }

    tog_Edit() {
        this.setState(prevState => ({
            modalEdit: !prevState.modalEdit
        }));
        this.removeBodyCss();
    }

    removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    showFilter() {
        this.setState({
            isFilter: !this.state.isFilter
        });
    }


    handleRemoveRow(e, idx) {
        if (typeof (idx) != "undefined")
          document.getElementById("addr" + idx).style.display = "none";
    };
    render() {
        return(
            <React.Fragment>
                <Breadcrumbs title="Trang chủ" breadcrumbItem="Danh sách thị trường" className="mt-2" />

                <Card>
                    <CardHeader className="bg-transparent">
                        <Row>
                            {/* <Col lg="6">
                                <h5 className="my-0">Danh sách hóa đơn</h5>
                            </Col> */}
                            <Col lg="12">
                                <div className="button-items mt-3 mb-3 text-right">
                                    <button className="waves-effect btn btn-primary btn-md waves-light" onClick={ this.showFilter }>
                                        <i className="fa fa-filter font-size-16 mr-2 align-middle"></i> Tìm kiếm nâng cao 
                                        <i className={ "ml-2 " + (this.state.isFilter ? 'fa fa-chevron-up' : 'fa fa-chevron-down ') } ></i>
                                    </button>
                                    {/* <a href={ config.pages.pageProductAdd } className="waves-effect btn btn-info btn-md waves-light">
                                        <i className="fa fa-plus font-size-16 mr-2 align-middle"></i> Thêm mới sản phẩm
                                    </a> */}
                                </div>
                            </Col>
                            <Collapse isOpen = { this.state.isFilter }>
                                <Col lg="12">
                                    <form action="" method="get">
                                        <Row>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Mã hóa đơn</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">E-mail</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Họ và tên</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Điện thoại</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Địa chỉ</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Tên công ty</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Chi nhánh</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Người duyệt</label>
                                                    <div className="col-md-9">
                                                        <select className="form-control">
                                                            <option>Chọn</option>
                                                            <option>Large select</option>
                                                            <option>Small select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Từ ngày</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="datetime-local"  id="example-datetime-local-input" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-md-3 col-form-label">Đến ngày</label>
                                                    <div className="col-md-9">
                                                        <input className="form-control" type="datetime-local"  id="example-datetime-local-input" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-12">
                                                <div className="button-items mt-3 mb-3 text-center">
                                                    <button className="waves-effect btn btn-primary btn-sm waves-light">
                                                        <i className="fa fa-filter mr-2 align-middle text-white font-size-16"></i> Lọc danh sách
                                                    </button>
                                                    <button className="waves-effect btn btn-warning btn-sm waves-light" type="reset" value="Reset">
                                                        <i className="fa fa-refresh mr-2 align-middle text-white font-size-16"></i> Làm mới bộ lọc
                                                    </button>
                                                    <button className="waves-effect btn btn-danger btn-sm waves-light" onClick = { this.showFilter }>
                                                        <i className="fa fa-times mr-2 align-middle text-white font-size-16"></i> Đóng
                                                    </button>
                                                </div>
                                            </div>
                                            
                                        </Row>
                                    </form>
                                </Col>
                            </Collapse>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <div className="row mb-3">
                            
                            {/* listView */}
                            <div className="col-lg-12 mb-3">
                                {/* <CardTitle>
                                    <h5 className="text-info mb-3">
                                        Danh sách hồ sơ
                                    </h5>
                                </CardTitle> */}
                                <div className="table-responsive">
                                    <Table className="table table-striped mb-3">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Tên hóa đơn</th>
                                                <th>Loại yêu cầu</th>
                                                <th>Người trình</th>
                                                <th>Phòng ban</th>
                                                <th>Đơn vị</th>
                                                <th>Trạng thái</th>
                                                <th>Đơn vị thụ hưởng</th>
                                                <th className="text-right">Active</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="addr01">
                                                <td>1</td>
                                                <td>Nguyễn Thành An</td>
                                                <td>Thanh toán</td>
                                                <td>
                                                    Đặng Thành Nam
                                                </td>
                                                <td>Phòng Kế toán</td>
                                                <td>
                                                    TSGACT
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Thanh toán</span>
                                                </td>
                                                <td>
                                                    Giang Hoàng
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" 
                                                        type="button" value="del" 
                                                        onClick={e => this.handleRemoveRow(e, "01")}
                                                        >
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr  id="addr03">
                                                <td>2</td>
                                                <td>Nguyễn Cường Mạnh</td>
                                                <td>Thu nợ</td>
                                                <td>
                                                    Trần Anh
                                                </td>
                                                <td>Phòng IT</td>
                                                <td>
                                                    TSGWAIT
                                                </td>
                                                <td>
                                                    <span className="badge badge-warning">Tạm dừng</span>
                                                </td>
                                                <td>
                                                    Giang Hoàng
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "02")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                            <tr  id="addr04">
                                                <td>3</td>
                                                <td>Nguyễn Anh Minh</td>
                                                <td>Truy lĩnh</td>
                                                <td>
                                                    Lê Bảo Hân
                                                </td>
                                                <td>Phòng Nhân sự</td>
                                                <td>
                                                    TSGHRM
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger">Đã đóng</span>
                                                </td>
                                                <td>
                                                    Hoàng Sơn
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "03")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr  id="addr05">
                                                <td>4</td>
                                                <td>Nguyễn Thành An</td>
                                                <td>Thanh toán</td>
                                                <td>
                                                    Đặng Thành Nam
                                                </td>
                                                <td>Phòng Kế toán</td>
                                                <td>
                                                    TSGACT
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Thanh toán</span>
                                                </td>
                                                <td>
                                                    Giang Hoàng
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "04")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr  id="addr06">
                                                <td>5</td>
                                                <td>Nguyễn Cường Mạnh</td>
                                                <td>Thu nợ</td>
                                                <td>
                                                    Trần Anh
                                                </td>
                                                <td>Phòng IT</td>
                                                <td>
                                                    TSGWAIT
                                                </td>
                                                <td>
                                                    <span className="badge badge-warning">Tạm dừng</span>
                                                </td>
                                                <td>
                                                    Giang Hoàng
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "05")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                            <tr  id="addr07">
                                                <td>6</td>
                                                <td>Nguyễn Anh Minh</td>
                                                <td>Truy lĩnh</td>
                                                <td>
                                                    Lê Bảo Hân
                                                </td>
                                                <td>Phòng Nhân sự</td>
                                                <td>
                                                    TSGHRM
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger">Đã đóng</span>
                                                </td>
                                                <td>
                                                    Hoàng Sơn
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "06")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr  id="addr08">
                                                <td>7</td>
                                                <td>Nguyễn Thành An</td>
                                                <td>Thanh toán</td>
                                                <td>
                                                    Đặng Thành Nam
                                                </td>
                                                <td>Phòng Kế toán</td>
                                                <td>
                                                    TSGACT
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Thanh toán</span>
                                                </td>
                                                <td>
                                                    Giang Hoàng
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "07")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr  id="addr09">
                                                <td>8</td>
                                                <td>Nguyễn Cường Mạnh</td>
                                                <td>Thu nợ</td>
                                                <td>
                                                    Trần Anh
                                                </td>
                                                <td>Phòng IT</td>
                                                <td>
                                                    TSGWAIT
                                                </td>
                                                <td>
                                                    <span className="badge badge-warning">Tạm dừng</span>
                                                </td>
                                                <td>
                                                    Giang Hoàng
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "08")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                            <tr  id="addr10">
                                                <td>9</td>
                                                <td>Nguyễn Anh Minh</td>
                                                <td>Truy lĩnh</td>
                                                <td>
                                                    Lê Bảo Hân
                                                </td>
                                                <td>Phòng Nhân sự</td>
                                                <td>
                                                    TSGHRM
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger">Đã đóng</span>
                                                </td>
                                                <td>
                                                    Hoàng Sơn
                                                </td>
                                                <td>
                                                    <div className="button-items text-right">
                                                        <button className="waves-effect btn waves-light" onClick={ this.tog_Edit }>
                                                            <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                        </button>
                                                        <button className="waves-effect btn waves-light" type="button" value="del"  onClick={e => this.handleRemoveRow(e, "01")}>
                                                            <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                    <nav aria-label="...">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex="-1">Sau</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                                </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">2</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Tiếp</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* modalEdit */}
                            <Modal
                                size="xl"
                                isOpen={ this.state.modalEdit }
                                toggle={ this.tog_Edit }
                                >
                                <div className="modal-header">
                                    <h5
                                        className="modal-title mt-0 text-primary"
                                        id="myLargeModalLabel"
                                        >
                                        Cập nhật danh sách trợ giúp
                                    </h5>
                                    <button
                                        onClick={() =>
                                            this.setState({ modalEdit: false })
                                        }
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Mã khách hàng</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">E-mail</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Họ và tên</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Điện thoại</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Địa chỉ</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Tên công ty</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Đơn vị thụ hưởng</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Người duyệt</label>
                                                <div className="col-md-9">
                                                    <select className="form-control">
                                                        <option>Chọn</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Từ ngày</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="datetime-local"  id="example-datetime-local-input" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-md-3 col-form-label">Đến ngày</label>
                                                <div className="col-md-9">
                                                    <input className="form-control" type="datetime-local"  id="example-datetime-local-input" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="text-center mt-3 col-lg-12">
                                        <button type="button" className="btn btn-primary btn-md waves-effect waves-light"
                                            onClick={() =>
                                                this.setState({ modalEdit: false })
                                            }
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            > Đóng
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default HelpList;
