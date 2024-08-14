import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './components/page/HomePage/HomePage';
import About from './components/page/About/About';
import Blog from './components/page/Wedding/BlogPage';
import Login from './components/organisms/LogInPage/login';
import Signup from './components/organisms/SIgnUp/signup';
import ContactPage from './components/page/Contact/contactPage';
import FlowerPage from './components/page/FlowerPage/flowerPage';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/flower' element={<FlowerPage />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
