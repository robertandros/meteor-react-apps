import { Meteor } from 'meteor/meteor';

const onEnterPrivatePage = (history) => {
    if (!Meteor.userId()) {
        history.replace('/');
    }
};

const onEnterPublicPage = (history) => {
    if (Meteor.userId()) {
        history.replace('/links');
    }
};

export { onEnterPrivatePage, onEnterPublicPage };
