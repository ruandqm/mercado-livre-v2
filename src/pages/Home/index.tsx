import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Benefits } from './components/Benefits'
import { Filter } from './components/Filter'
import { Products } from './components/Products'
import FilterContext from './contexts/FilterContext'
import './index.scss'

export const Home = () => {
    const [filterOption, setFilterOption] = useState()
    const [search, setSearch] = useState()
    return (
        <div className="home">
            <FilterContext.Provider value={{ filterOption, setFilterOption, search, setSearch }}>
                <Navbar />
                <Benefits />
                <Filter />
                <Products />
            </FilterContext.Provider>
        </div>

    )
}