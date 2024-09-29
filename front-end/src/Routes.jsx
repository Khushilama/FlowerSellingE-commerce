import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './components/page/HomePage/HomePage';
import About from './components/page/About/About';
import Blog from './components/page/Wedding/BlogPage';
import Login from './components/organisms/LogInPage/login';
import Signup from './components/organisms/SIgnUp/signup';
import ContactPage from './components/page/Contact/contactPage';
import FlowerPage from './components/page/FlowerPage/flowerPage';
import CartEmpty from './components/organisms/addToCart/addtocart'
import ProductDetail from './components/page/ProductDetail/ProductDetail';
import WishList from './components/organisms/Wishlist/wishlist';
import Cartdetails from './components/page/CartDetails/cartdetails';
import Checkout from './components/organisms/Checkout/Checkout';
import OrderConfirmation from './components/organisms/OrderConfirm/Orderconfirm';
import InfluencerSignupPage from './components/organisms/InfluencerSignUpPage/InfluencerSignUpPage';
import InfluencerProfile from './components/page/InfluencerProfilePage/InfluencerProfile';
import MyOrders from './components/organisms/Order/Orders';
import Protected from './Protected';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/home" element={<Protected Component={HomePage} />} />
            <Route path="/about" element={<Protected Component={About} />} />
            <Route path="/blog" element={<Protected Component={Blog} />} />
            <Route path="/cart" element={<Protected Component={CartEmpty} />} />
            <Route path="/contact" element={<Protected Component={ContactPage} />} />
            <Route path="/flower" element={<Protected Component={FlowerPage} />} />
            <Route path="/wishlist" element={<Protected Component={WishList} />} />
            <Route path="/cartdetails" element={<Protected Component={Cartdetails} />} />
            <Route path="/checkout" element={<Protected Component={Checkout} />} />
            <Route path="/orderconfirmation" element={<Protected Component={OrderConfirmation} />} />
            <Route path="/influencerSignupPage" element={<Protected Component={InfluencerSignupPage} />} />
            <Route path="/productdetail/:id" element={<Protected Component={ProductDetail} />} />
            <Route path="/influencerProfile" element={<Protected Component={InfluencerProfile} />} />
            <Route path="/order" element={<Protected Component={MyOrders} />} />
{/* 
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<About />} /> */}
?                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/cart' element={<CartEmpty />} />  */}
                {/* <Route path='/contact' element={<ContactPage />} /> */}
                {/* <Route path='/flower' element={<FlowerPage />} /> */}
                <Route path="/*" element={<Navigate to="/login" />} />
                {/* <Route path='/wishlist' element={<WishList />} /> */}
                {/* <Route path='/cartdetails' element={<Cartdetails/>} /> */}
                {/* <Route path="/checkout" element={<Checkout />} />  */}
                {/* <Route path='/orderconfirmation' element={<OrderConfirmation />} />  */}
                {/* <Route path='/influencerSignupPage' element={<InfluencerSignupPage/>} /> */}
                {/* <Route path="/productdetail/:id" element={<ProductDetail/>} />
                <Route path='/influencerProfile' element={<InfluencerProfile />} />
                <Route path='/order' element={<MyOrders />} /> */}

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
