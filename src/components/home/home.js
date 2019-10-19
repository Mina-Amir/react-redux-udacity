import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import QuestionCard from '../questionCard/questionCard'
import M from 'materialize-css'

class Home extends Component {
    state = {
        firstTab: true
    }
    componentDidMount() {
        M.AutoInit()
    }
    changeTabs = (status) => {
        this.setState({firstTab: status})
    }
    render() {
        const answeredQuestionskeys = Object.keys({
            ...this.props.user.answers
        })

        const answeredQuestions = answeredQuestionskeys.map(key => {
            return {
                ...this.props.questions[key]
            }
        })

        answeredQuestions.sort((a, b) => {
            return b.timestamp - a.timestamp
        })

        const UnanwseredQuestionsObj = {
            ...this.props.questions
        }

        answeredQuestionskeys.forEach(key => {
            delete UnanwseredQuestionsObj[key]
        })

        const UnanwseredQuestionsArray = Object.values(UnanwseredQuestionsObj)
        UnanwseredQuestionsArray.sort((a, b) => {
            return b.timestamp - a.timestamp
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col s3"></div>

                    <div className="col s6">
                        <ul className="tabs tabs-fixed-width tab-demo z-depth-1 marg-top">
                            <li className="tab tab-tittle">
                                <a
                                    onClick={() => this.changeTabs(true)}
                                    className={`${this.state.firstTab
                                    ? 'active'
                                    : ''}`}
                                    href="#test1">Unanwsered Question</a>
                            </li>
                            <li className="tab tab-tittle">
                                <a
                                    onClick={() => this.changeTabs(false)}
                                    className={`${ !this.state.firstTab
                                    ? 'active'
                                    : ''}`}
                                    href="#test2">anwsered Question</a>
                            </li>
                        </ul>

                        <div id="test1" className="col s12">

                            <div className="container-all">
                                {UnanwseredQuestionsArray.map(UnanwseredQuestion => <QuestionCard
                                    key={UnanwseredQuestion.id}
                                    answered={false}
                                    question={UnanwseredQuestion}
                                    autherAvatar={this.props.users[UnanwseredQuestion.author].avatarURL}/>)}
                            </div>

                        </div>

                        <div id="test2" className="col s12">

                            <div className="container-all">
                                {answeredQuestions.map(answeredQuestion => <QuestionCard
                                    key={answeredQuestion.id}
                                    answered={true}
                                    autherAvatar={this.props.users[answeredQuestion.author].avatarURL}
                                    question={answeredQuestion}/>)}
                            </div>

                        </div>

                    </div>

                    <div className="col s3"></div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => ({users: state.users, questions: state.questions, user: state.user}))(Home))