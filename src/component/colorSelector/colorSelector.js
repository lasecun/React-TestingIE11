import React from 'react'
import './colorSelector.css'

const ColorSelector = (props) => {
    return (
        <select onChange={(data) => props.onColorSelected(data)}>
            <option value={'all'}>All</option>
            {props.colorList.map(item => {
                return (<option value={item.color}>{item.color}</option>)
            })}
        </select>
    )
};

export default ColorSelector