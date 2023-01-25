import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import FormInput from './components/FormInput/index'
import axios from 'axios'
import { IformInput } from './interfaces'
import FormContext from './contexts/FormContext'

export const Cadastro = () => {
    const [productInfo, setProductInfo] = useState<IformInput>({})

    const submitHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        axios.post('https://apigenerator.dronahq.com/api/lWfvpOJ6/products', productInfo)
            .then(() => {
                alert('Produto cadastrado com sucesso!')
            })
            .catch(function (error) {
                alert(error);
            });
    }

    return (
        <div className="cadastro">
            <Navbar />
            <div className="container">
                <form className='mt-3 ps-5 pe-5'>
                    <FormContext.Provider value={{ productInfo, setProductInfo }}>
                        <FormInput id='name' type='text' name='Nome' />
                        <FormInput id='brand' type='text' name='Marca' />
                        <FormInput id='price' type='number' name='Preço' />
                        <FormInput id='category' type='text' name='Categoria' />
                        <FormInput id='img' type='text' name='Imagem' />
                        <button type="submit" className="btn btn-warning" onClick={submitHandler}>Submit</button>
                    </FormContext.Provider>
                </form>
            </div>

        </div>

    )
}
