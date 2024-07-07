import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./footer.css";
import logo from "../../../assets/images/eco-logo.png";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" className="mb-4" md="12">
                        <div className="footer__quick-links">
                            <h1 className="text-white">SHIP HÀNG TOÀN QUỐC</h1>
                        </div>
                        <p className="footer__text mt-4">
                            Toàn bộ mọi nơi trên đất nước Việt Nam
                        </p>
                    </Col>
                    <Col lg="5" className="mb-4" md="3">
                        <div className="footer__quick-links">
                            <h1 className="text-white">
                                TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM
                            <p className="footer__text mt-4">
                                Chúng tôi không chịu trách nghiệm khi đơn hàng bị
                                rách ,<br></br> bẩn ,mặt hàng đến tay quý khách luôn<br>
                                </br>luôn là sản phẩm đầy đủ cả tem lẫn nhãn mác
                            </p>
                            </h1>
                        </div>
                        <p className="footer__text mt-4">

                        </p>
                    </Col>
                    <Col lg="3" md="3">
                        <div className="footer__quick-links">
                            <h1 className="text-white">THÔNG TIN LIÊN HỆ</h1>
                            <ListGroup className="mb-3 footer__contact mt-4">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-map-pin-line"></i>
                                    </span>
                                    <p>18A-Lê Trọng Tấn</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-phone-line"></i>
                                    </span>
                                    <p>0377315794</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-mail-line"></i>
                                    </span>
                                    <p>nguyenhaidangcode@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md="12">
                        <p className="footer__copyright">
                            Copyrignt {year} developed by Nguyen Hai Dang. All
                            rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
