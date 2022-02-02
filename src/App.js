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
    };
    
    static propTypes = {
      initialGood: PropTypes.number,
      initialNeutral: PropTypes.number,
      initialBad: PropTypes.number,
    }

    state = {
      good: this.props.initialGood,
      neutral: this.props.initialNeutral,
      bad: this.props.initialBad,
    }

    countTotalFeedback() {
     const { good, neutral, bad } = this.state; 
     
      const total = good + neutral + bad;
      return total;
    }

    countPositiveFeedbackPercentage() {
      const percentage = (100 / this.countTotalFeedback()) * this.state.good;
      return percentage;
    }
   
     handleIncrement = (option) => {
      this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
        }
      })
    }

    render() {
      const { good, neutral, bad } = this.state;
    
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
          total={ this.countTotalFeedback() }
          positivePercentage={ this.countPositiveFeedbackPercentage() }
          />
          <Section />
      </div>
    )
    }
}
export default App;
