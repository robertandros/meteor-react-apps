import React from 'react';
import ReactDOM from 'react-dom';
import Player from './player';
import { withTracker } from 'meteor/react-meteor-data';
import { Players } from '../api/players';

class App extends React.Component {
  deletePlayer(id) {
    Players.remove({
      '_id': id
    });
  };

  setScore(id, points) {
    Players.update(
      id, {
        $set: {
          score: points
        }
      }
    );
  };

  handleSubmit(e) {
    e.preventDefault();
    let playerName = ReactDOM.findDOMNode(this.refs.playerName).value;
    if(playerName) {
      Players.insert({
        name: playerName,
        score: 0
      });
      playerName = '';
    }
  };

  render() {
    return (
      <div className="container">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">This is a Score Keeper app demo.</p>
              <p className="subtitle">Made with Meteor and React.</p>
            </div>
          </div>
        </section>
        <table className="table players is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>
                <div className="has-text-centered">
                  <span>ID</span>
                </div>
              </th>
              <th>
                <div className="has-text-centered">
                  <span>Name</span>
                </div>
              </th>
              <th>
                <div className="has-text-centered">
                  <span>Points</span>
                </div>
              </th>
              <th>
                <div className="has-text-centered has-text-danger">
                  <span>Delete?</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.players.map((player) => (
              <Player key={player._id.valueOf()} id={player._id.valueOf()} name={player.name} score={player.score} deletePlayer={this.deletePlayer} setScore={this.setScore} />
            ))
          }
          </tbody>
        </table>
        <form ref="submitForm">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div className="field is-marginless">
                <div className="control">
                  <input className="input is-info" type="text" name="playerName" ref="playerName" placeholder="Player name" />
                </div>
              </div>
              <a className="button is-primary" onClick={this.handleSubmit.bind(this)}>Add player</a>
            </div>
          </nav>
        </form>
      </div>
    );
  };
};

AppContainer = withTracker(() => {
  let players = Players.find({}, {
    sort: {
      score: -1
    }
  }).fetch();
  return {
    players
  }
})(App);

export default AppContainer;