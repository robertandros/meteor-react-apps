import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

class Links extends Component {
    logout = () => {
        const { history } = this.props;
        Meteor.logout((err) => {
            if(err) throw err;
        });
        history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Shrtnd lnks list.</h1>
                <ul>
                    <li>This is the first link.</li>
                    <li>This is the second link.</li>
                    <li>...and this is just a dummy list.</li>
                </ul>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Links;

Links.propTypes = {
    history: PropTypes.object
}
