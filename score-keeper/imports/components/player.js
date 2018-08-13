import React from 'react';

class Player extends React.Component {
  render() {
    return (
    <a className="panel-block is-size-3">
      <div className="column player-name is-4-mobile is-5-tablet">
        <p className="title is-4">{this.props.name}</p>
        <p className="subtitle is-6">{this.props.id}</p>
      </div>
      <div className="column is-6-mobile is-5-tablet">
        <div className="has-text-centered is-size-5-mobile is-size-4-tablet is-size-3-desktop points is-flex">
          <span className="icon change-points circle-border" onClick={this.props.setScore.bind(this, this.props.id, this.props.score - 1)}>
            <i className="fas fa-minus has-text-danger"></i>
          </span>
          <span><strong>{this.props.score} pts.</strong></span>
          <span className="icon change-points circle-border" onClick={this.props.setScore.bind(this, this.props.id, this.props.score + 1)}>
            <i className="fas fa-plus has-text-success"></i>
          </span>
        </div>
      </div>
      <div className="column is-2-mobile is-2-tablet">
        <div className="has-text-centered is-size-6" onClick={this.props.deletePlayer.bind(this, this.props.id)}>
          <span className="icon">
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </a>
    );
  }
}

export default Player;