import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
    render() {
        const { children } = this.props;
        return (
            <div id="app-container">
                {children}
            </div>
        );
    }
}

export default Container;

Container.propTypes = {
    children: PropTypes.elemen
}
