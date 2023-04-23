import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = element => {
    this.setState({ [element]: this.state[element] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        {this.countPositiveFeedbackPercentage() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
