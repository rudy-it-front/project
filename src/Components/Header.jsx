import {Navbar, Nav, Container} from "react-bootstrap";
import'/src/styles/header.scss';
import {FaPizzaSlice, FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {MdEmojiFoodBeverage} from "react-icons/md";
import {TbSalad, TbSoup} from "react-icons/tb";
import {BsCupHotFill} from "react-icons/bs";
import {FaBurger} from "react-icons/fa6";
import {LuDessert} from "react-icons/lu";

function Header(){
    return(
        <>
            <Navbar expand="lg"
                    className="ps-lg-5 position-relative w-100 mb-0 navbarTopStyle"
                    style={{background:"black"}}>
                <Container fluid >
                        <Link to={'/'}
                                      className="font-family-patua fs-1 linkRefBtn"
                                      style={{color:"white"}}
                        >Victoria</Link>
                        <Navbar.Toggle aria-controls="navbarScroll"
                                       style={{color:"white",
                                       backgroundColor:"white"}}
                                       className="custom-toggler"/>
                        <Navbar.Collapse id="navbarScroll" style={{color:"white"}}>
                                <Nav
                                    className="me-5 my-1 my-lg-0 mx-auto fs-5">
                                    <Link className="linkRefBtn" to={'contacts'}>Контакты</Link>
                                    <Link className="linkRefBtn" to={'delivery'}>Доставка</Link>
                                    <Link className="linkRefBtn" to={'booking'}>Бронювання</Link>
                                    <Link className="linkRefBtn" to={'stock'}>Акции</Link>
                                </Nav>
                            <Nav className="me-5 my-1 my-lg-0 mx-auto fs-5">
                                <Link to={"cart"}
                                          style={{color:"white"}}>
                                <FaShoppingCart className='shop-cart-button' />
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar
                expand="sm"
                className="w-100 mb-0 position-relative navbarTopStyle"
                style={{
                    background: 'white',
                    borderBottom: '1px solid gray',
                    overflowX: 'auto',
                }}
            >
                <Container className="p-0 h-100 d-flex justify-content-center">
                    <Nav
                        className="fs-5 h-100 d-flex align-items-center flex-nowrap nav-scroll"
                        style={{ whiteSpace: 'nowrap', gap: '5px', flexWrap: 'nowrap' }}
                    >
                        <Link to="pizza" className="linkMenuBtn">
                            <FaPizzaSlice /> Pizza
                        </Link>
                        <Link to="beverages" className="linkMenuBtn">
                            <MdEmojiFoodBeverage /> Beverages
                        </Link>
                        <Link to="salad" className="linkMenuBtn">
                            <TbSalad /> Salad
                        </Link>
                        <Link to="soup" className="linkMenuBtn">
                            <TbSoup /> Soup
                        </Link>
                        <Link to="hot" className="linkMenuBtn">
                            <BsCupHotFill /> Hot
                        </Link>
                        <Link to="burger" className="linkMenuBtn">
                            <FaBurger /> Burger
                        </Link>
                        <Link to="desert" className="linkMenuBtn">
                            <LuDessert /> Desert
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header