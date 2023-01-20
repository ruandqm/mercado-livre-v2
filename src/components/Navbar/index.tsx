import React from 'react'
import './index.scss'

export const Navbar = () => {
    return (
        <header className='mainHeader'>
            <div className="searchBar">
                <input type="text" />
            </div>
            <nav>
                <ul>
                    <li>Categorias</li>
                    <li>Ofertas do Dia</li>
                    <li>Histórico</li>
                    <li>Moda</li>
                </ul>
            </nav>
        </header>
    )
}
