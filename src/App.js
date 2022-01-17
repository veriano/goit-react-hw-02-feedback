  import React, {Component} from 'react';
  import PropTypes from 'prop-types';
  import FeedbackOptions from './Components/FeedbackOptions';
  import Statistics from './Components/Statistics'; 
  import Section from './Components/Section';
  
  class App extends Component {
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

    countTotalFeedback() {
      this.setState(prevState => {
        return {
         total: prevState.good + prevState.neutral + prevState.bad,
        }
      })
    }

    countPositiveFeedbackPercentage() {
      this.setState(prevState => {
        return {
          percentage: (100 / prevState.total) * prevState.good,
        }
      })
    }
   
     handleIncrement = (option) => {
      this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
          total: this.countTotalFeedback(),
          percentage: this.countPositiveFeedbackPercentage(),
        }
      })
    }

    render() {
      const { good, neutral, bad, total, percentage } = this.state;
    
      return (
      <div>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={this.handleIncrement}
          />
        <Statistics
          good={ good }
          neutral={ neutral }
          bad={ bad }
          total={ total }
          positivePercentage={ percentage }
          />
          <Section />
      </div>
    )
    }
}
export default App;
