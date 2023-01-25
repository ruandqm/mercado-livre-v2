import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Benefits } from './components/Benefits'
import { Filter } from './components/Filter'
import { Products } from './components/Products'
import FilterContext from './contexts/FilterContext'
import './index.scss'

export const Home = () => {
    const [filterOption, setFilterOption] = useState()
    return (
        <div className="home">
            <Navbar />
            <div className="container">
                <FilterContext.Provider value={{ filterOption, setFilterOption }}>
                    <Benefits />
                    <Filter />
                    <Products />
                </FilterContext.Provider>
            </div>
        </div>

    )
}