import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

function PrivateRoute(mainProps) {
    const Component = mainProps.component
    if (!mainProps.login) {
        return <Redirect
            from={mainProps.location.pathname}
            to={{
            pathname: "/signin",
            state: {
                from: {
                    pathname: mainProps.location.pathname
                }
            }
        }}/>
    } else {
        return (
            <Route exact path={mainProps.path} render={props => <Component {...props}/>}/>
        )
    }
}

export default connect(state => ({login: state.login}))(PrivateRoute)