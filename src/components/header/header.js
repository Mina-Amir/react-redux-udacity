import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import M from "materialize-css"
import {connect} from 'react-redux'
import {handleLogout} from '../../redux/actions/shared'

class Header extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    logout = () => {
        this.props.dispatch(handleLogout())
    }
    render() {
        const navLogged = this.props.login
            ? (
                <ul className="right">
                    <li>Hello, {this.props.user.name}</li>
                    <li>
                        <div className="profile-pic" style={{backgroundImage: `url(${this.props.user.avatarURL})`}}></div>
                    </li>
                    <li><button onClick={this.logout} className="waves-effect waves-light btn center">Log out</button></li>
                </ul>
            )
            : null
        return (
            <div>
                <nav>
                    <div className="nav-wrapper container">
                        <ul id="nav-mobile" className=" hide-on-med-and-down">
                            <li>
                                <NavLink to="/" activeClassName="link-active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="link-active" to="/add">New Question</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="link-active" to="/leaderboard">Leader Board</NavLink>
                            </li>
                        </ul>
                        {navLogged}
                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(state => ({login: state.login, user: state.user}))(Header)