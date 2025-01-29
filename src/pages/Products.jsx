import { Row, Col, Container } from "react-bootstrap"
import "./Products.css"
import { ProductCard } from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { Alert, Spinner } from "react-bootstrap";   
export function Products() {
    const { products, loading, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Row>
                    <Col className="text-center">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Row>
                    <Col className="text-center">
                        <Alert variant="danger">
                            Failed to load products
                        </Alert>
                    </Col>
                </Row>
            </Container>
        );
    }
    return (
        <Container>
            <h1 className="products-header text-center">Our Products</h1>
            <Row className="g-2 my-3">
                {products.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard key={product.id} product={product}  />
                    </Col>
                ))}
            </Row>
        </Container>

    )
}