import React from 'react';

const TipCard = ({ tip }) => (
  <div className="tip-card">
    <p>{tip.message}</p>
    <small>
      {tip.name && <span>Name: {tip.name} | </span>}
      {tip.email && <span>Email: {tip.email} | </span>}
      Date: {new Date(tip.date).toLocaleDateString()}
    </small>
  </div>
);

export default TipCard;
