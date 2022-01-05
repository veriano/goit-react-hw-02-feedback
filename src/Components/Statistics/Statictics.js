import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
        return (
            <div className={s.feedback}>
              <h2><b>Statistics</b></h2>
              <ul className={s.list}>
                <li><p>Good: {good}</p></li>
                <li><p>Neutral: {neutral}</p></li>
                <li><p>Bad: {bad}</p></li>
                <li><p>Total: {total}</p></li>
                <li><p>Percentage: {Math.round(positivePercentage)}%</p></li>

              </ul>
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