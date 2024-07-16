import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


import  HomePage  from './components/page/HomePage/HomePage';
import About from './components/page/About/About';
import Blog from './components/page/Blog/BlogPage';



const AppRoutes = () =>{
    return (
           <BrowserRouter>
            <Routes>
            
                <Route path='/home' element={<HomePage  />}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
           </BrowserRouter>
    );
}
export default AppRoutes;