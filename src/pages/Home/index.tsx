import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Benefits } from './components/Benefits'
import { Filter } from './components/Filter'
import { Products } from './components/Products'
import './index.scss'

export const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Benefits />
            <Filter />
            <Products />
        </div>
    )
}