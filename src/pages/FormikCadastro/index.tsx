import React from 'react'
import { FormikForm } from './components/Form/index'
import { Navbar } from '../../components/Navbar'

export const FormikCadastro = () => {
    return (
        <div className="formikCadastro">
            <Navbar />
            <div className="container">
                <div className="ps-5 pe-5"><FormikForm /></div>
            </div>
        </div>
    )
}
