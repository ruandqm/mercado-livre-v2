import React from 'react'
import './index.scss'
import phoneImg from './img/iphone.jpg'

export const Products = () => {
    let products = []
    for (let i = 0; i < 6; i++) {
        products.push(<article key={i} className="product" id="first">
            <img src={phoneImg} width="100" alt="celular" />
        </article>)
    }
    return (
        <section className="products">
            {products.map((element) => {
                return (
                    element
                )
            })}
        </section>
    )
}
