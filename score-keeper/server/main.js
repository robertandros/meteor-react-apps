import { Players } from '../imports/api/players';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Players._ensureIndex({
    name: 1
  }, {
    unique: 1
  });
});