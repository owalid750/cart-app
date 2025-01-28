import { Container, Table } from "react-bootstrap"
import { CustomButton } from "../components/CustomButton"
import { useDispatch, useSelector } from "react-redux"
import { Image } from "react-bootstrap"
import { decrementQuantity, incrementQuantity, removeFromCart, clearCart } from "../rtk/slices/cartSlice"
export function Cart() {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const totalCartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Container className="my-5 text-center">

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>title</th>
                        <th>price</th>
                        <th>t-price</th>
                        <th>quantity</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.length == 0 ? <tr><td colSpan={7}>Cart is empty</td></tr> : cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Image src={item.image} style={{ width: "50px", height: "50px" }} /></td>
                                <td>{item.title}</td>
                                <td>{item.price} $</td>
                                <td>{(item.price * item.quantity).toFixed(2)} $</td>
                                <td>
                                    <span className="quantity">{item.quantity}</span>
                                    <CustomButton className={"increment-btn"} text={"+"} onClick={() => { dispatch(incrementQuantity(item)) }} />
                                    <CustomButton className={"decrement-btn"} text={"-"} onClick={() => { dispatch(decrementQuantity(item)) }} />
                                </td>
                                <td>
                                    <CustomButton className={"delete-btn"} text={"Delete"} onClick={() => { dispatch(removeFromCart(item)) }} />
                                </td>

                            </tr>
                        ))
                    }
                    {cartItems.length > 0 && <tr><td colSpan={7}>Total price: {totalCartPrice.toFixed(2)} $</td></tr>}
                    {cartItems.length > 0 &&
                        <tr>
                            <td colSpan={7}>
                                <CustomButton
                                    className={"clear-btn"}
                                    text={"Clear cart"}
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to clear the cart?")) {
                                            dispatch(clearCart());
                                        }
                                    }}
                                />
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </Container>
    )
}