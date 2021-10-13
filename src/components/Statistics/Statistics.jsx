import React from 'react';
import { MyStatistics } from './Statistics.styled';
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