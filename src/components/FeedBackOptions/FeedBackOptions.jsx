import React from 'react';
import PropTypes from 'prop-types'
import {Btn} from './FeedBackOptions.styled'
const FeedBackOpt = ({onLeaveFeedback,btnNames,reset}) => {
    return (
        <>
            {btnNames.map(btn => (
                <Btn
                    key={btn}
                    type="button"
                    name={btn}
                    onClick={onLeaveFeedback}
                >
                    {btn}
                </Btn>
            ))}
            
        </>
    );
}

FeedBackOpt.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    btnNames:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default FeedBackOpt;