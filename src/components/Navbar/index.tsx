import React from 'react'
import './index.scss'

export const Navbar = () => {
    return (
        <header className='mainHeader'>
            <div className="searchBar">
                <input type="text" />
            </div>
            <nav className='d-flex justify-content-center'>
                <ul>
                    {/* <Link to='/cadastro'><li>Cadastro</li></Link> */}
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/Cadastro">Cadastro</a></li>
                    <li><a href="/FormikCadastro">Cadastro Formik</a></li>
                </ul>
            </nav>
        </header>
    )
}
