import React, { Component } from 'react';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { onEnterPrivatePage } from '../utils/router';
import AddLink from '../components/AddLink';
import LinksList from '../components/LinksList';

class Links extends Component {
    componentDidMount() {
        onEnterPrivatePage(this.props.history);
    }

    logout = () => {
        const { history } = this.props;
        Meteor.logout((err) => {
            if (err) throw err;
        });
        history.push('/');
    };

    render() {
        return (
            <div>
                <LinksList />
                <AddLink />
                <div className="row">
                    <button onClick={this.logout}>Logout</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Links);

Links.propTypes = {
    history: PropTypes.object
}
