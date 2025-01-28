
import Card from 'react-bootstrap/Card';
import { CustomButton } from './CustomButton';
import "./ProductCard.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../rtk/slices/cartSlice';
export function ProductCard({ product }) {
    const dispatch = useDispatch()

    return (
        <Card className='product-card' style={{ backgroundImage: `url(${product.image})` }}>
            <Card.Body className='product-card-body'>
                <Card.Title>{product.title}</Card.Title>
                <span>{product.price} $</span>
                <Card.Text>
                    {product.description ? `${product.description.substring(0, 20)}...` : "desc not found"}
                </Card.Text>
                <CustomButton className={"main-btn"} text={"Add to cart"} onClick={() => dispatch(addToCart(product))} />
            </Card.Body>
        </Card>
    )
}