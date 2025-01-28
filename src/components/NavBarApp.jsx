import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarApp.css"
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

export function NavBarApp() {
    const cartCount = useSelector(state => state.cart).length;
    return (
        <Navbar expand="lg" className="custom-navbar" >
            <Container >
                <Navbar.Brand as={Link} to="/">Cart App</Navbar.Brand>
                {/* or both works but above generaly best practice  */}
                {/* <Link className='navbar-brand' to={"/"}>Cart App</Link> */}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Single Nav with flex utilities */}
                    {/* <Nav className="w-100">
                        <Nav.Link href="#home">Products</Nav.Link>
                        <Nav.Link className="ms-lg-auto" href="#link">Cart</Nav.Link>
                    </Nav> */}

                    {/* or using split nav */}

                    {/* center-aligned links if you want make it left ms-auto */}
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    </Nav>

                    {/* Right-aligned links */}
                    <Nav>
                        <Nav.Link as={Link} to="/cart">
                            <i className="fa-solid fa-cart-shopping position-relative">
                                {cartCount > 0 &&
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartCount}</span>
                                }
                            </i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

