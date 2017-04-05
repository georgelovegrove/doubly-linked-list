import React from 'react';

import './user-card.css';

const UserCard = ({ person }) => {
  return (
    <div className="person-wrapper">
      <p>Name: {person.name}</p>
      <p>Score: {person.score}</p>
    </div>
  );
};

export default UserCard;
