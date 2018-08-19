import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container" id="app-container">
                <img className="bg-image" src="/images/bg.png"></img>
                {children}
            </div>
        );
    }
}

export default Container;

Container.propTypes = {
    children: PropTypes.element
}
