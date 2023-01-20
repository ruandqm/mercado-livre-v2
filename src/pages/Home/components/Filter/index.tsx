import React from 'react'

export const Filter = () => {
    return (
        <div className="filter" style={{ display: 'flex', justifyContent: 'center' }}>
            <select name="quantidade-itens" id="itens">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}
