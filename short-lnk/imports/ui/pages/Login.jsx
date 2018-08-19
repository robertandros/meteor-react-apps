import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1>Log in Lnk Shrtnr!</h1>
                </div>
                <LoginForm browserHistory={this.props.history} />
                <div className="row">
                    <Link to="/signup">Need an account?</Link>
                </div>
            </div>
        );
    }
}

export default Login;

Login.propTypes = {
    history: PropTypes.object
}
