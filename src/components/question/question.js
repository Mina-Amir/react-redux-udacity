import React from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from '../../redux/actions/questions'
import NoMatch from '../NoMatch/NoMatch'

const Question = (props) => {
    const question = props.match.params.questionID
    if(!props.questions.hasOwnProperty(question)){
        return <NoMatch />
    }
    const authorObject = props.users[props.questions[question].author]
    let choiseOne = null
    let choiseTwo = null

    const saveAnswer = () => {
        let choise = null
        if (choiseOne.checked) {
            choise = 'optionOne'
        } else if (choiseTwo.checked) {
            choise = 'optionTwo'
        } else {
            alert('Please, Select a choise')
            return
        }

        props.handleSaveQuestionAnswer({authedUser: props.user.id, qid: question, answer: choise})
    }

    if (props.user.answers.hasOwnProperty(question)) {
        const totalAnswers = props.questions[question].optionOne.votes.length + props.questions[question].optionTwo.votes.length
        const optionOnePercentage = ((props.questions[question].optionOne.votes.length / totalAnswers) * 100).toFixed(2)
        const optionTwoPercentage = ((props.questions[question].optionTwo.votes.length / totalAnswers) * 100).toFixed(2)
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <div className="container-all">
                            <div className="container-header">
                                <p>Asked by {authorObject.name}</p>
                            </div>
                            <div className="container-data flex-container">
                                <div className="container-img">
                                    <img src={authorObject.avatarURL} alt='profile figure'/>
                                </div>
                                <div className="SubContainer-data">
                                    <p>Results:</p>
                                    <div className={`first-div ${props.user.answers[question] === 'optionOne' ? 'your-vote' : ''}`}>
                                        {props.user.answers[question] === 'optionOne'
                                            ? (
                                                <div>
                                                    <span className="label-Your-vote">Your vote</span>
                                                    Your vote
                                                </div>
                                            )
                                            : null}
                                        <p>Would you rather {props.questions[question].optionOne.text}</p>

                                        <div className="progress">
                                            <div
                                                className="determinate"
                                                style={{
                                                width: `${optionOnePercentage}%`
                                            }}>{optionOnePercentage}%</div>
                                        </div>

                                        <p>{props.questions[question].optionOne.votes.length}
                                            out of {props.questions[question].optionOne.votes.length + props.questions[question].optionTwo.votes.length}</p>
                                    </div>
                                    <div className={`second-div ${props.user.answers[question] === 'optionTwo' ? 'your-vote' : ''}`}>
                                        {props.user.answers[question] === 'optionTwo'
                                            ? (
                                                <div>
                                                    <span className="label-Your-vote">Your vote</span>
                                                    Your vote
                                                </div>
                                            )
                                            : null}
                                        <p>Would you rather {props.questions[question].optionTwo.text}</p>
                                        <div className="progress">
                                            <div
                                                className="determinate"
                                                style={{
                                                width: `${optionTwoPercentage}%`
                                            }}>{optionTwoPercentage}%</div>
                                        </div>

                                        <p>{props.questions[question].optionTwo.votes.length}
                                            out of {props.questions[question].optionOne.votes.length + props.questions[question].optionTwo.votes.length}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col s3"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s3"></div>
                <div className="col s6">
                    <div className="container-all marg-top space-left-right">
                        <div className="container-header">
                            <p>{authorObject.name}
                                asks:</p>
                        </div>
                        <div className="container-data flex-container">
                            <div className="container-img">
                                <img src={authorObject.avatarURL} alt="author profile"/>
                            </div>
                            <div>
                                <p>Would You Rather ...</p>
                                <div>
                                    <label>
                                        <input
                                            ref={input => choiseOne = input}
                                            type="radio"
                                            name="options"
                                            value="optionOne"/>
                                        <span>{props.questions[question].optionOne.text}</span>
                                    </label>
                                    <label>
                                        <input
                                            ref={input => choiseTwo = input}
                                            type="radio"
                                            name="options"
                                            value="optionTwo"/>
                                        <span>{props.questions[question].optionTwo.text}</span>
                                    </label>
                                </div>
                                <button onClick={saveAnswer} className="waves-effect waves-light btn center">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s3"></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleSaveQuestionAnswer: (data) => {
        dispatch(handleSaveQuestionAnswer(data))
      }
    };
  };

export default connect(state => ({questions: state.questions, user: state.user, users: state.users}), mapDispatchToProps)(Question)