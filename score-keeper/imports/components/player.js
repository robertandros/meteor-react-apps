import React from 'react';

const Player = (props) => (
  <tr>
    <th>{props.id}</th>
    <td>{props.name}</td>
    <td>{props.score}</td>
  </tr>
);

export default Player;