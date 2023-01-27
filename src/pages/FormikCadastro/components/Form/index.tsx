import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { IformInput, IformInputValidate } from '../../../Cadastro/interfaces';


export const FormikForm = () => (
    /*     const [isValidated, SetisValidated] = useState(true) */
    <div>
        <h1>My Form</h1>
        <Formik validateOnChange={false} validateOnBlur={false}
            initialValues={
                {
                    name: '',
                    brand: '',
                    price: '',
                    category: '',
                    img: ''

                }}

            onSubmit={(values) => {
                axios.post('https://apigenerator.dronahq.com/api/lWfvpOJ6/products', values)
                    .then(() => {
                        alert('Produto cadastrado com sucesso!')
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            }}
            validate={(values) => {
                const errors: IformInputValidate = {};

                if (/[^a-zA-Z 0-9]+/g.test(values.name)) {
                    errors.name = 'O nome do produto não pode conter caracteres especiais'
                }
                else if (Number(values.price) <= 0) {
                    errors.price = 'O preço deve ser maior do que 0'
                }
                else if (values.img.length == 0) {
                    errors.img = 'Required';
                }

                Object.keys(errors).length != 0 ? alert(JSON.stringify(errors, null, 2)) : null
                return errors
            }}
        >
            {() => (
                <Form>
                    <Field className='form-control mb-3' type="text" name="name" placeholder="Nome" />
                    <Field className='form-control mb-3' type="text" name="brand" placeholder="Marca" />
                    <Field className='form-control mb-3' type="number" name="price" placeholder="Preço" />
                    <Field className='form-control mb-3' type="text" name="category" placeholder="Categoria" />
                    <Field className='form-control mb-3' type="text" name="img" placeholder="Imagem" />
                    <button className='btn btn-warning' type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div >
);