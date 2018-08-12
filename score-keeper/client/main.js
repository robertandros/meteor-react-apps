import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/app';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});