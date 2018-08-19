import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginFormStyle.scss';

class Form extends Component {
    render() {
        const { handleChange, handleSubmit, values } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="email" style={{ display: 'block' }}>
                        Email
                    </label>
                    <input id="email"
                        className="col-xs-12 col-sm-6"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        type="text" />
                </div>
                <div className="row">
                    <label htmlFor="password" style={{ display: 'block' }}>
                        Password
                    </label>
                    <input id="password"
                        className="col-xs-12 col-sm-6"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        type="password" />
                </div>
                <div className="row">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;

Form.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    values: PropTypes.object
}
