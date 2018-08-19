import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1>Join Lnk Shrtnr</h1>
                </div>
                <RegisterForm browserHistory={this.props.history}/>
                <div className="row">
                    <Link to="/">Already have an account?</Link>
                </div>
            </div>
        );
    }
}

export default Signup;

Signup.propTypes = {
    history: PropTypes.object
}
