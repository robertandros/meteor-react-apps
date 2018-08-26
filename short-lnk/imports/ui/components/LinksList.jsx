import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Links from '/db/collections/Links';

class LinksList extends Component {
    render() {
        const { links } = this.props;
        return (
            <div>
                <h1>Shrtnd lnks list.</h1>
                <ul>
                    {
                        links.map((link) => (
                            <li key={link._id}>
                                <a href={`/link/${link._id}`} target="_blank" rel="noopener noreferrer">{link._id}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('links');
    const links = Links.find({}).fetch();
    return {
        links
    };
})(LinksList);

LinksList.propTypes = {
    links: PropTypes.array
};
