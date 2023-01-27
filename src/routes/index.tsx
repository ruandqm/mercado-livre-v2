import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/index';
import { Cadastro } from '../pages/Cadastro/index';
import { FormikCadastro } from '../pages/FormikCadastro/index'

export const BrowseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/FormikCadastro' element={<FormikCadastro />} />
            </Routes>
        </BrowserRouter>
    )
}