import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle,Container } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Breadcrumb/Breadcrumb';

import ChartCustomer from './reportCustomer/reportCustomer';
import ChartProduct from './reportProduct/reportProduct';

class Reports extends Component {

	render() {
		const chartWidth = (window.innerWidth > 991) ? parseInt((window.innerWidth - 420) / 2) : parseInt(window.innerWidth - 100);
		return (
            <React.Fragment>
                <Breadcrumbs title="Trang chủ" breadcrumbItem="Báo cáo thống kê" />
                <Row>
                    <Col lg={6}>
                        <ChartCustomer />
                    </Col>
                    <Col lg={6}>
                        <ChartProduct />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Reports;