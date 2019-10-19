import React, {Component} from 'react';
import {Route, Switch, Router} from "react-router-dom"
import Header from './components/header/header'
import Home from './components/home/home'
import SignIn from './components/signin/signin'
import {connect} from 'react-redux'
import {handleInitialData} from './redux/actions/shared'
import PrivateRoute from './components/privateRoute/privateRoute'
import NewQuestion from './components/newQuestion/newQuestion'
import LeaderBoard from './components/leaderBoard/leaderBoard'
import Loader from './components/loader/loader'
import Question from './components/question/question'
import NoMatch from './components/NoMatch/NoMatch'
import history from './history'

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        dispatch(handleInitialData())
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/signin" render={(routeProps) => <SignIn {...routeProps}/>}/>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute exact path="/add" component={NewQuestion}/>
                        <PrivateRoute exact path="/leaderboard" component={LeaderBoard}/>
                        <PrivateRoute path="/questions/:questionID" component={Question}/>
                        <PrivateRoute exact path="*" component={NoMatch}/>
                    </Switch>
                    {this.props.loading
                        ? <Loader/>
                        : null}
                </div>
            </Router>
        )
    }
}

export default connect(state => ({loading: state.loading, login: state.login, users: state.users}))(App)
