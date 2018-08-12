import React from 'react';

const Player = (props) => (
  <tr>
    <td>
      <div className="has-text-centered">
        <span>{props.id}</span>
      </div>
    </td>
    <td>
      <div className="has-text-centered">
        <span>{props.name}</span>
      </div>
    </td>
    <td>
      <div className="has-text-centered points is-flex">
        <span className="icon" onClick={props.setScore.bind(this, props.id, --props.score)}>
          <i className="fas fa-minus has-text-danger"></i>
        </span>
        <span><strong>{props.score}</strong></span>
        <span className="icon" onClick={props.setScore.bind(this, props.id, ++props.score)}>
          <i className="fas fa-plus has-text-success"></i>
        </span>
      </div>
    </td>
    <td>
      <div className="has-text-centered" onClick={props.deletePlayer.bind(this, props.id)}>
        <span className="icon">
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </td>
  </tr>
);

export default Player;