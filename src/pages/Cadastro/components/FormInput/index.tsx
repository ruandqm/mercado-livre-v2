import React, { useState, useContext, useEffect } from "react"
import FormContext from "../../contexts/FormContext"
import { IformInput } from "../../interfaces"

interface Iforminputprops {
    id: string
    name: string
    type: string
}

const formInput = (props: Iforminputprops) => {
    const { productInfo, setProductInfo } = useContext(FormContext)

    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.name}</label>
            <input type={props.type} className="form-control" id={props.id} onChange={(e) => {
                setProductInfo({ ...productInfo, [props.id]: e.target.value })
            }} />
        </div>
    )
}
export default formInput