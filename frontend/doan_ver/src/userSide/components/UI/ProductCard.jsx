import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { VND } from "../../../utils/convertVND";
import "../../styles/product-card.css";

const ProductCard = (props) => {
    const { item } = props;
    const [showDetailButton, setShowDetailButton] = useState(item.quantity >= 2);

    const handleShowDetail = () => {
        if (item.quantity < 2) {
            setShowDetailButton(false);
        }
    };

    return (
        <Col lg="3" md="4" className="mb-2">
            <div className="product__item" style={{ minHeight: "450px",width:"200px" }}>
                <div className="product__img">
                    <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={item.pathImg}
                        alt="productImg"
                        className="box-shadow"
                        style={{ width: "200px", height: "300px" }}
                    />
                    <div className="p-2 product__info">
                        <h3 className="product__name" style={{ textOverflow: "ellipsis", whiteSpace: "normal" }}>
                            <Link reloadDocument to={`/shop/${item.id}`}>
                                {item.name}
                            </Link>
                        </h3>
                        <br></br>
                        <span>{item.categoryName}</span>
                    </div>
                    <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                        <span className="price">{VND.format(item.price)}</span>
                    </div>
                </div>
            </div>
            {!showDetailButton && <p style={{ color: "red" }}>Sản phẩm tạm hết</p>}
            {showDetailButton && (
                <Link reloadDocument to={`/shop/${item.id}`}>
                    <motion.button
                        whileHover={{ scale: 0.9 }}
                        style={{ height: "40px", width: "200px" }}
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={handleShowDetail}
                    >
                        Chi tiết sản phẩm
                    </motion.button>
                </Link>
            )}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Col>
    );
};

export default ProductCard;
