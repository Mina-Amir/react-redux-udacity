import React from 'react'
import {Link} from 'react-router-dom'

const QuestionCard = (props) => {
    return (
        <div>
            <div className="container-header">
                <p>{props.question.author}</p>
            </div>
            <div className="container-data flex-container">
                <div className="container-img">
                    <img src={`${props.autherAvatar}`} alt="Profile"/>
                </div>
                <div className="SubContainer-data">
                    <p>Would you rather</p>
                    <small>{props.question.optionOne.text}</small>
                    <Link to={`questions/${props.question.id}`}>
                        <button className="btn waves-effect waves-light">view Poll</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default QuestionCard