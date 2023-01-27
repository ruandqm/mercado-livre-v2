import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import phoneImg from './img/iphone.jpg'
import axios from 'axios'
import FilterContext from '../../contexts/FilterContext'

interface Iproduct {
    name: string
    brand: string
    price: number
    category: string
    img: string
}

export const Products = () => {
    const [products, setProducts] = useState<Iproduct[]>([])
    const [isGet, setIsGet] = useState(false)
    const [render, toRender] = useState(false)
    const { filterOption, setFilterOption } = useContext(FilterContext)

    const getProducts = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/lWfvpOJ6/products')
        setProducts(response.data)
        setIsGet(true)
    }
    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (isGet) {
            const productsSort = filterOption == 0 ? (products.sort((a, b) => a.price - b.price)) : (
                products.sort((a, b) => b.price - a.price)
            )
            console.log(productsSort)
            setProducts(productsSort)
            toRender(!render)
        }
    }, [filterOption])

    useEffect(() => {
    }, [render])

    return (
        <section className="products">
            {isGet && products.map((element, index) => {
                return (
                    <article key={index} className="product" id="first">
                        <img className='img-responsive' src={element.img} alt="" />
                        <span>{element.name}</span>
                        <span>{element.brand}</span>
                        <span>R$ {element.price}</span>
                        <span>{element.category}</span>
                    </article>
                )
            })}
        </section>
    )
}
