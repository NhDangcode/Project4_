import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Progress } from "reactstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartApi } from "../../redux/slices/cartSlice";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import { getAllCartItemApi } from "../../redux/slices/cartSlice";
import "../styles/product-details.css";
import { toast } from "react-toastify";
import { getDetailService } from "../../services/productService";
import { VND } from "../../utils/convertVND";
import { Height } from "@mui/icons-material";
const ProductDetails = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState({});
    const [countAddCart, setCountAddCart] = useState(1);
    const [loading, setLoading] = useState(false);
    const [loadingCart, setLoadingCart] = useState(false);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        const fetchDetailProductApi = async () => {
            setLoading(true);
            const responeProduct = await getDetailService(id);
            const productDetail = {
                id: responeProduct.data?.id,
                name: responeProduct.data?.name,
                author: responeProduct.data?.author,
                image: responeProduct.data?.pathImg,
                price: responeProduct.data?.price,
                description: responeProduct.data?.detail,
                category: responeProduct.category?.name,
                company: responeProduct.company?.name,
                type: responeProduct.data?.type,
                quantity: responeProduct.data?.quantity,
                idCategory: responeProduct.category?.id,
                idCompany: responeProduct.company.id,
            };
            setProductDetail(productDetail);
            setLoading(false);
        };
        fetchDetailProductApi();
    }, []);

    const products = useSelector((state) => state.product.products);
    const data = products.filter(
        (item) => item.idCategory === productDetail.idCategory && item.idCompany == productDetail.idCompany
    );

    const addToCart = () => {
        const data = {
            idProduct: productDetail.id,
            quantity: countAddCart,
            price: productDetail.price,
        };
        const fetchAddProductToCartApi = async () => {
            setLoadingCart(true);
            dispatch(addProductToCartApi(data));
            dispatch(getAllCartItemApi());
            setLoadingCart(false);
            toast.success(
                `Thêm ${productDetail.name} vào giỏ hàng thành công!`
            );
        };
        if (user) {
            fetchAddProductToCartApi();
        } else {
            toast.error("Bạn cần đăng nhập để thêm vào giỏ hàng!");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productDetail]);

    return (
        <Helmet title={productDetail.name}>
            {loadingCart ? (
                <Progress animated value="100" className="progress"></Progress>
            ) : (
                ""
            )}
            <CommonSection title={productDetail.name} />
            {loading === true ? (
                <div className="loading--api">
                    <Spinner animation="grow" variant="success" />
                </div>
            ) : (
                <>
                    <section>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="book-frame">
                                        <div className="book-cover"></div>
                                        <div className="book-spine"></div>
                                        <div className="book-back"></div>
                                        <div className="product__image-container">
                                            <img className="product__image" src={productDetail.image} alt={productDetail.name} />
                                        </div>
                                    </div>
                                </Col>



                                <Col>
                                    <div className="product__details">
                                        <h2>{productDetail.name}</h2>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <br></br>
                                            <span className="product__price">
                                                Giá :{" "}
                                                {VND.format(
                                                    productDetail.price
                                                )}
                                            </span>
                                            <br></br>
                                            <span className="product__price">
                                                Loại sản phẩm :{" "}
                                                {productDetail.category
                                                    ? productDetail.category.toUpperCase()
                                                    : ""}
                                            </span>
                                            <br></br>
                                            <span className="product__price">
                                                Nhà xuất bản: {" "}
                                                {productDetail.category
                                                    ? productDetail.company.toUpperCase()
                                                    : ""}
                                            </span>
                                            <br></br>
                                            <span className="product__price">
                                                Số lượng còn lại:{" "}
                                                {productDetail.quantity}
                                            </span>
                                            <br></br>
                                            <span className="product__price">
                                                Tác Giả:{" "}
                                                {productDetail.author}
                                            </span>

                                            <br></br>
                                            <span className="product__price">
                                                Nội Dung:{" "}
                                                {productDetail.description}
                                            </span>
                                            <br></br>
                                        </div>

                                        <div className="btn--group__addCart">
                                            <button
                                                className="btn--sub__addCart"
                                                onClick={() => {
                                                    let count = countAddCart === 1 ? 1 : countAddCart - 1;
                                                    setCountAddCart(count);
                                                }}
                                            >
                                                <i className="ri-subtract-fill"></i>
                                            </button>

                                            <div className="btn--sub__count">
                                                <p>{countAddCart}</p>
                                            </div>
                                            <button
                                                className="btn--sub__addCart"
                                                onClick={() => {
                                                    if (countAddCart < productDetail.quantity) {
                                                        setCountAddCart(countAddCart + 1);
                                                    } else {
                                                        toast.error("Số lượng sản phẩm đã đạt giới hạn còn lại!");
                                                    }
                                                }}
                                            >
                                                <i className="ri-add-fill"></i>
                                            </button>

                                        </div>

                                        <br></br>
                                        <div>
                                            {productDetail.quantity >= 2 ? (
                                                <motion.button
                                                    whileTap={{ scale: 1.2 }}
                                                    className="buy__btn btn__addCart"
                                                    onClick={addToCart}
                                                >
                                                    Thêm vào giỏ
                                                </motion.button>
                                            ) : (
                                                <p style={{ color: 'red' }}>Sản phẩm tạm hết hàng</p>
                                            )}
                                        </div>


                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <Row
                                style={{
                                    textAlign: "center",
                                    marginBottom: "100px",
                                }}
                            >
                                <h1 >Các sản phẩm tương tự</h1>
                            </Row>
                            <Row>
                                {products.length === 0 ? (
                                    <h1 className="text-center fs-4">
                                        Hiện tại không có sản phẩm nào!
                                    </h1>
                                ) : (
                                    <ProductsList data={data} />
                                )}
                            </Row>
                        </Container>
                    </section>
                </>
            )}
        </Helmet>
    );
};

export default ProductDetails;
