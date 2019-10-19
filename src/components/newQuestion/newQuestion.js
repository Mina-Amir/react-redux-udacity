import React, {Component} from 'react'
import {connect} from 'react-redux'
import history from '../../history'
import {addQuestionHandle} from '../../redux/actions/questions'

class NewQuestion extends Component {
    addQuestion = () => {
        let optionOne = this.optionOne.value
        let optionTwo = this.optionTwo.value
        let userID = {
            ...this.props.user
        }.id
        if (optionOne !== "" || optionTwo !== "") {
            this
                .props
                .dispatch(addQuestionHandle({author: userID, optionOneText: optionOne, optionTwoText: optionTwo}))
                history.push('/')
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3"></div>

                    <div className="col s6">
                        <div className="container-all marg-top space-left-right">
                            <div className="container-header center">
                                <h5>Create New Question</h5>
                            </div>
                            <div className="SubContainer-data">
                                <p>Complete the question</p>
                                <h4>Would you rather ...</h4>
                                <input
                                    type='text'
                                    ref={(optionOne) => this.optionOne = optionOne}
                                    placeholder='Enter Option One Text Here'/>
                                <input
                                    ref={(optionTwo) => this.optionTwo = optionTwo}
                                    type='text'
                                    placeholder='Enter Option Two Text Here'/>
                                <button className="waves-effect waves-light btn center" onClick={this.addQuestion}>Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className="col s3"></div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({user: state.user}))(NewQuestion)
