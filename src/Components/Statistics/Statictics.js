import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from '../Notification';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
        return (
              <div className={s.feedback}>
              <h2 className={s.statisticsTitle}><b>Statistics</b></h2>
              {total > 0 ? (<ul className={s.list}>
              <li><p><b>Good: {good}</b></p></li>
              <li><p><b>Neutral: {neutral}</b></p></li>
              <li><p><b>Bad: {bad}</b></p></li>
              <li><p><b>Total: {total}</b></p></li>
              <li><p><b>Percentage: {Math.round(positivePercentage)}%</b></p></li>
            </ul>) 
            : 
            (<Notification message='No feedback given' />)}
            </div>
        )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics;