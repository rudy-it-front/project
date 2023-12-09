import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import {CartProvider} from "./page/CartContext.jsx";

import Home from "/src/page/Home.jsx"
import Contacts from "./page/Contacts.jsx";
import Delivery from "./page/Delivery.jsx";
import Booking from "./page/Booking.jsx";
import Stock from "./page/Stock.jsx";
import Pizza from "./page/page`s menu/pizza.jsx";
import Beverages from "./page/page`s menu/beverages.jsx";
import Salad from "./page/page`s menu/salad.jsx";
import Soup from "./page/page`s menu/soup.jsx";
import Hot from "./page/page`s menu/hot.jsx";
import Burger from "./page/page`s menu/burger.jsx";
import Desert from "./page/page`s menu/desert.jsx";
import Cart from "./page/Cart.jsx";


function App(){
    return(
        <CartProvider>
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/delivery" element={<Delivery/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/booking" element={<Booking/>}/>
                        <Route path="/stock" element={<Stock/>}/>
                        <Route path="/menu/pizza" element={<Pizza/>}/>
                        <Route path="/menu/beverages" element={<Beverages/>}/>
                        <Route path="/menu/salad" element={<Salad/>}/>
                        <Route path="/menu/soup" element={<Soup/>}/>
                        <Route path="/menu/hot" element={<Hot/>}/>
                        <Route path="/menu/burger" element={<Burger/>}/>
                        <Route path="/menu/desert" element={<Desert/>}/>
                        <Route path="/pizza" element={<Pizza/>}/>
                        <Route path="/beverages" element={<Beverages/>}/>
                        <Route path="/salad" element={<Salad/>}/>
                        <Route path="/soup" element={<Soup/>}/>
                        <Route path="/hot" element={<Hot/>}/>
                        <Route path="/burger" element={<Burger/>}/>
                        <Route path="/desert" element={<Desert/>}/>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;