import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/index';
import { Cadastro } from '../pages/Cadastro/index';


export const BrowseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}