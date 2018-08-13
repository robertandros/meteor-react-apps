import React from 'react';
import ReactDOM from 'react-dom';
import FlipMove from 'react-flip-move';
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
    if (this.playerName.value) {
      Players.insert({
        name: this.playerName.value,
        score: 0
      });
      this.playerName.value = '';
    }
  };

  render() {
    return (
      <div className="container">
        <a href="https://github.com/robertandros/meteor-react-apps">
          <img style={{ position: 'absolute', top: 0, right: 0, border: 0, zIndex: 1000 }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" />
        </a>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">This is a Score Keeper app demo.</p>
              <p className="subtitle">Made with Meteor and React.</p>
            </div>
          </div>
        </section>
        <nav className="panel players-list">
          <p className="panel-heading is-size-3 has-text-danger">
            Players scores
          </p>
          <FlipMove duration="200" maintainContainerHeight="true">
            {
              this.props.players.map((player) => (
                <Player key={player._id.valueOf()} id={player._id.valueOf()} name={player.name} score={player.score} deletePlayer={this.deletePlayer} setScore={this.setScore} />
              ))
            }
          </FlipMove>
        </nav>
        <form ref="submitForm">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div className="field is-marginless">
                <div className="control">
                  <input className="input is-info" type="text" name="playerName" ref={el => this.playerName = el} placeholder="Player name" />
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