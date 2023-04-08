
import React, { Component } from 'react';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: 0,
      selectedAnswer: '',
      score: 0
    };
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ questions: data.results }))
      .catch(error => console.log(error));
  }

  handleAnswerSelect = answer => {
    this.setState({
      selectedAnswer: answer,
      score: this.state.score + (answer === this.state.questions[this.state.currentQuestion].correct_answer ? 1 : 0)
    });
  };

  handleNextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      selectedAnswer: ''
    });
  };

  renderQuestion = question => {
    const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
    return (
      <div key={question.question}>
        <h2>{question.question}</h2>
        <ul>
          {answers.map(answer => (
            <li key={answer}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={this.state.selectedAnswer === answer}
                  onChange={() => this.handleAnswerSelect(answer)}
                />
                {answer}
              </label>
            </li>
          ))}
        </ul>
        <button disabled={!this.state.selectedAnswer} onClick={this.handleNextQuestion}>Next</button>
      </div>
    );
  };

  renderScore = () => {
    const passPercentage = 60;
    const percentageScore = (this.state.score / this.state.questions.length) * 100;
    const message = percentageScore >= passPercentage ? 'You passed!' : 'You failed.';
    return (
      <div>
        <h2>Your score: {this.state.score}/{this.state.questions.length}</h2>
        <p>{message}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.currentQuestion < this.state.questions.length ? (
          this.renderQuestion(this.state.questions[this.state.currentQuestion])
        ) : (
          this.renderScore()
        )}
      </div>
    );
  }
}

export default Quiz;







 