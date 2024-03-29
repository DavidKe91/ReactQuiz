import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  renderQuestins() {
    return this.props.quizResult.map((_data, index) => {
      return (
        <div className="list-grp">
          {_data.question} <br />
          The correct answer is: {_data.answerindex} : You have selected{" "}
          {this.props.answers[index] + 1}{" "}
          {this.props.answers[index] + 1 === _data.answerindex ? (
            <span className="status">Correct!</span>
          ) : (
            ""
          )}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="quiz-story">
        <div>
          <strong>Lets see your results</strong>!
          <div>{this.renderQuestins()}</div>
        </div>
      </div>
    );
  }
}

export default Result;
