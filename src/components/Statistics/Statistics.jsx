import React from 'react';
import { MyStatistics } from './Statistics.styled';
import PropTypes from 'prop-types'
const Statistics = ({good,neutral, bad, total,positive}) => {
    return (
        <MyStatistics>
            <span>Good: { good} </span>
            <span>Neutral: { neutral} </span>
            <span>Bad: { bad} </span>
            <span>Total: { total} </span>
            <span>Positive: { positive} %</span>
        </MyStatistics>
    );
}

export default Statistics;
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired}