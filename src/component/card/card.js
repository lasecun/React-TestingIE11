import React from 'react'
import './card.css'
import Panel from "../panel/panel";

const Card = (props) => {
    return (
        <Panel id={`Service-${props.name}-${props.id}`}
               className='enable-panel card-content'
               content={
        <div className={'card-box'} style={{backgroundColor: props.color}}>
            <div>
                <p className='text-muted'>{props.name}</p>
                <p className='text-muted'>{props.name}</p>
                <p className='text-muted'>{props.name}</p>
            </div>
        </div>
               }
               contentHeading={null}
               contentFooter={null}/>
    )
};

export default Card
