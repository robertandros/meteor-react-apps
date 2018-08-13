import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/app';
import { Meteor } from 'meteor/meteor';

import 'bulma/css/bulma.css';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});