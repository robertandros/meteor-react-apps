import { Meteor } from 'meteor/meteor';

const onEnterPrivatePage = (history) => {
    if (!Meteor.userId()) {
        history.replace('/');
    }
};

export { onEnterPrivatePage };
