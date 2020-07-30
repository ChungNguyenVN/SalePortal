import React, { Component } from "react";

import { Row, Col, Card, CardHeader, CardBody, CardTitle, Container, Modal, Button, Collapse } from "reactstrap";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';

import { config} from '../../pages/environment';


class Filter extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isFilter: false,
            modalEdit: false,
            modalDelete: false,
            // itemTable
            tableList: [
                { id: 1, number: 1, name: "Nguyễn Văn A", types: "Thanh toán", user: "Đặng Thanh Nam", department: "Kế toán", location: "TSGKT", status: "Hoạt động", unit: "Microsoft", action:"" },
                { id: 2, number: 2, name: "Nguyễn Văn B", types: "Trả góp", user: "Đặng Thanh Công", department: "Ký thuật", location: "TSGIT", status: "Tạm dừng", unit: "Oracle", action:"" },
                { id: 3, number: 3, name: "Nguyễn Văn C", types: "Mua hàng", user: "Đặng Thanh Minh", department: "Nhân sự", location: "TSGHR", status: "Đã đóng", unit: "Dell-Lap", action:"" },
                { id: 4, number: 4, name: "Nguyễn Văn D", types: "Trả nợ", user: "Đặng Thanh Nhật", department: "Maketing", location: "TSGMK", status: "Hoạt động", unit: "Apple", action:"" },
                { id: 5, number: 5, name: "Nguyễn Văn E", types: "Hoàn ứng", user: "Đặng Thanh An", department: "Lập trình", location: "TSGLT", status: "Tạm dừng", unit: "HP", action:"" },
            ]
        };
        this.showFilter = this.showFilter.bind(this);
        this.tog_Edit = this.tog_Edit.bind(this);
        this.tog_Delete = this.tog_Delete.bind(this);
        this.removeRowItem = this.removeRowItem.bind(this);
    }

    removeRowItem(id) {
        let tableList = this.state.tableList;
        var filtered = tableList.filter(function (item) {
            return item.id !==id;
        });
        this.setState({tableList: filtered});
        this.setState({ modalDelete: id });
    }

    tog_Edit() {
        this.setState(prevState => ({
            modalEdit: !prevState.modalEdit
        }));
        this.removeBodyCss();
    }

    tog_Delete() {
        this.setState(prevState => ({
            modalDelete: !prevState.modalDelete
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
          this.setState({ modalDelete: false });
          
    };

    render() {
        return(
            <React.Fragment>
                <Card>
                    <CardHeader className="bg-transparent">
                        <Row>
                            <Col lg="6">
                                <h5 className="my-0">Danh sách khách hàng</h5>
                            </Col>
                            <Col lg="6">
                                <div className="button-items mt-3 mb-3 text-right">
                                    <button className="waves-effect btn btn-primary btn-md waves-light" onClick={ this.showFilter }>
                                        <i className="fa fa-filter font-size-16 mr-2 align-middle"></i> Tìm kiếm nâng cao 
                                        <i className={ "ml-2 " + (this.state.isFilter ? 'fa fa-chevron-up' : 'fa fa-chevron-down ') } ></i>
                                    </button>
                                    <a href={ config.pages.pageCustomerAddNew } className="waves-effect btn btn-info btn-md waves-light">
                                        <i className="fa fa-plus font-size-16 mr-2 align-middle"></i> Thêm mới khách hàng
                                    </a>
                                </div>
                            </Col>
                            <Collapse isOpen = { this.state.isFilter }>
                                <Col lg="12">
                                    <form action="" method="get">
                                        <Row>

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
                                                <th>Tên khách hàng</th>
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
                                            {
                                                this.state.tableList.map((lists) =>
                                                    <tr key={ lists.id }>
                                                        <td>
                                                            { lists.number }
                                                        </td>
                                                        <td>
                                                            { lists.name }
                                                        </td>
                                                        <td>
                                                            { lists.types }
                                                        </td>
                                                        <td>
                                                            { lists.user }
                                                        </td>
                                                        <td>
                                                            { lists.department }
                                                        </td>
                                                        <td>
                                                            { lists.location }
                                                        </td>
                                                        <td>
                                                            { lists.status }
                                                        </td>
                                                        <td>
                                                            { lists.unit }
                                                        </td>
                                                        <td>
                                                            <div className="button-items text-right">
                                                                <button className="waves-effect btn waves-light" 
                                                                    onClick={ this.tog_Edit }>
                                                                    <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                                </button>
                                                                <button className="waves-effect btn waves-light" 
                                                                    type="button" value="del" 
                                                                    onClick={ this.tog_Delete }
                                                                    id = { lists.id }
                                                                >
                                                                    <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                                </button>
                                                                
                                                            </div>
                                                            {/* confirmDel */}
                                                            <Modal
                                                                size="sm"
                                                                isOpen={ this.state.modalDelete ==  lists.id }
                                                                toggle={ this.tog_Delete }
                                                                >
                                                                <div className="modal-header">
                                                                    <h5
                                                                        className="modal-title mt-0 text-primary"
                                                                        id="modalDel"
                                                                        >
                                                                        Bạn muốn xóa không ?
                                                                    </h5>
                                                                    <button
                                                                        onClick={() =>
                                                                            this.setState({ modalDelete: false })
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
                                                                
                                                                    <div className="button-items text-center">
                                                                        <button type="button" className="btn btn-primary btn-md waves-effect waves-light"
                                                                            onClick={() =>
                                                                                this.setState({ modalDelete: false })
                                                                            }
                                                                            data-dismiss="modal"
                                                                            aria-label="Close"
                                                                            > Hủy
                                                                        </button>
                                                                        <button className="waves-effect btn-danger btn btn-md waves-light" type="button" value="del"  
                                                                            onClick={() => this.removeRowItem(lists.id)}
                                                                            data-dismiss="modal"
                                                                            aria-label="Close"
                                                                        >
                                                                            Xóa
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                            
                                                        </td>
                                                       
                                                    </tr>
                                                )
                                            }

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
                                        Cập nhật danh sách khách hàng
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
export default Filter;