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
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/cart' element={<CartEmpty />} /> 
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/flower' element={<FlowerPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
                <Route path='/wishlist' element={<WishList />} />
                <Route path='/cartdetails' element={<Cartdetails/>} />
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path='/orderconfirmation' element={<OrderConfirmation />} /> 
                <Route path='/influencerSignupPage' element={<InfluencerSignupPage/>} />
                <Route path="/productdetail/:id" element={<ProductDetail/>} />
                <Route path='/influencerProfile' element={<InfluencerProfile />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
