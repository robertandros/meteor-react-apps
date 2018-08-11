import React from 'react';
import Player from './player';
import { players } from '../utils'

const App = () => (
  <div className="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <p class="title">This is a Score Keeper app demo.</p>
          <p class="subtitle">Made with Meteor and React.</p>
        </div>
      </div>
    </section>
    <table className="table players is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
      {
        players.map((player) => (
          <Player key={player._id} id={player._id} name={player.name} score={player.score} />
        ))
      }
      </tbody>
    </table>
  </div>
);

export default App;