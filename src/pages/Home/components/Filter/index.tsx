import React, { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'

export const Filter = () => {
    const { filterOption, setFilterOption } = useContext(FilterContext)

    const selectionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFilterOption(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
        <div className="filter mt-3 gap-3" style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='btn btn-warning' value={0} onClick={selectionHandler}>Ordenar pelo menor preço</button>
            <button className='btn btn-warning' value={1} onClick={selectionHandler}>Ordenar pelo maior preço</button>
        </div>
    )
}
