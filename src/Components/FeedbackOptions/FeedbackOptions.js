import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    
        <ul className={s.listButtons}>
            {options.map(option => (
        <li key={option}><button className={s.button} type="button" 
        onClick={() => onLeaveFeedback(option)}>{option}</button></li>))}
         </ul>
         )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;