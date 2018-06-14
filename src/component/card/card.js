import React from 'react'

const Card = (props) => {
    return (
        <div onClick={() => props.onServiceSelected('1')}>
            <p className='serviceDescription'>{props.title}</p>
            <p className='text-muted'>{props.subtitle}</p>
        </div>
    )
};

export default Card
