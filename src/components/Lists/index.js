import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Container, Modal, Button, Collapse } from "reactstrap";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';


const Lists = ({ tablehead, tablebody }) => {
    
    return (

        <React.Fragment>
            <Row>
                <Col lg="12">
                    <div className="table-responsive">
                        <Table className="table">
                            <thead>
                                <tr>
                                    {tablehead.map(item => (
                                        <th key={item}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <Tbody>
                                {tablebody.map((item, i) => (
                                    <Tr key={i}>
                                        <Td>{i + 1} </Td>
                                        <Td>
                                            {item.titleHistory}
                                        </Td>
                                        <Td>
                                            {item.typeRequire}
                                        </Td>
                                        <Td>
                                            {item.userRequest}
                                        </Td>
                                        <Td>
                                            {item.dateRequire}
                                        </Td>
                                        <Td>
                                            {item.status && <span className={`badge 
                                                            ${
                                                item.status === 'active' && 'badge-primary' ||
                                                item.status === 'inactive' && 'badge-danger' ||
                                                item.status === 'pending' && 'badge-warning'
                                                }
                                                            `}>
                                                {item.status}
                                            </span>}
                                        </Td>
                                        <Td>
                                            <div className="button-items text-right">

                                                <button 
                                                    className="waves-effect btn waves-light"
                                                    data-toggle="modal"
                                                    data-target=".bs-example-modal-lg"
                                                >
                                                    <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                                                </button>
                                                <button className="waves-effect btn waves-light">
                                                    <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                                                </button>

                                                {/* {item.active && <i className={ `fa 
                                                ${
                                                    item.active === 'edit' && 'fa-pencil mr-2 align-middle text-primary font-size-16' ||
                                                    item.active === 'delele' && 'fa-trash mr-2 align-middle text-danger font-size-16'

                                                } `}>
                                                    {item.active}
                                                </i> } */}

                                            </div>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </div>
                </Col>
                
            </Row>
        </React.Fragment>
        
    );
}
export default Lists