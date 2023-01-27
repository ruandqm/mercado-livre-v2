import React, { useContext } from 'react'
import FilterContext from '../../pages/Home/contexts/FilterContext'
import './index.scss'

export const Navbar = () => {
    const { setSearch } = useContext(FilterContext)

    const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <header className='mainHeader'>
            <div className="searchBar">
                <input type="text" onChange={getSearch} />
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
