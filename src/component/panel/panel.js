import React from 'react';
import PropTypes from 'prop-types';
import './panel.css';


const Panel = ({content, className = '', contentHeading = null, contentFooter = null, id}) => {

    return (
        <div id={id} className={'panel panel-default ' + className}>
            {(contentHeading === null) ?
                ''
                :
                <div className='panel-heading'>
                    {
                        contentHeading
                    }
                </div>
            }

            <div className='panel-body'>
                {content}
            </div>


            {(contentFooter === null) ?
                ''
                :
                <div className='panel-footer'>
                    {
                        contentFooter
                    }
                </div>
            }
        </div>

    );
};


export default Panel;


Panel.propTypes = {
    content: PropTypes.any,
    contentHeading: PropTypes.object,
    contentFooter: PropTypes.object,
    className: PropTypes.string
};
