import { Meteor } from 'meteor/meteor';
import Links from '../collections/Links';

Meteor.methods({
    'links.insert'({ url }) {
        Links.insert({
            url,
            userId: Meteor.userId()
        });
    }
});
