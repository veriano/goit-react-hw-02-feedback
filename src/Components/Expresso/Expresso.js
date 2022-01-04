import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Expresso.module.css';

class Expresso extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
    initialPositivePercentage: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
    initialTotal: PropTypes.number,
    initialPositivePercentage: PropTypes.number,
  }

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: this.props.initialTotal,
    percentage: this.props.initialPositivePercentage,
  }

  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
        total: prevState.good + prevState.neutral + prevState.bad + 1,
        percentage: 100 / (prevState.total + 1) * (prevState.good + 1),
      }
    });
  }

  handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.good + prevState.neutral + prevState.bad + 1,
        percentage: 100 / (prevState.total + 1) * prevState.good,
      }
    });
  }

  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
        total: prevState.good + prevState.neutral + prevState.bad + 1,
        percentage: 100 / (prevState.total + 1) * prevState.good ,
      }
    });
  }

  render() {
    return  <div className={s.feedback}>
            <h1>Please leave feedback</h1>
            <ul className={s.listButtons}>
              <li><button className={s.button} type="button" onClick={this.handleIncrementGood}>Good</button></li>
              <li><button className={s.button} type="button" onClick={this.handleIncrementNeutral}>Neutral</button></li>
              <li><button className={s.button} type="button" onClick={this.handleIncrementBad}>Bad</button></li>

            </ul>
            <div>
              <h2><b>Statistics</b></h2>
              <ul className={s.list}>
                <li><p>Good: {this.state.good}</p></li>
                <li><p>Neutral: {this.state.neutral}</p></li>
                <li><p>Bad: {this.state.bad}</p></li>
                <li><p>Total: {this.state.total}</p></li>
                <li><p>Percentage: {Math.round(this.state.percentage)}%</p></li>

              </ul>
            </div>
            </div>
  }
}
export default Expresso;