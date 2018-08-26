import { Meteor } from 'meteor/meteor';
import Links from '../collections/Links';

Meteor.publish('links', () => {
    return Links.find({
        userId: Meteor.userId()
    });
});

Meteor.publish('allLinks', () => {
    return Links.find({});
});
