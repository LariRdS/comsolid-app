import React from 'react';
import db from '../assets/dataBase.json';

export default function CardActives() {
  const { actives } = db;
  return (
    <div>
      {actives?.map((active) => (
        <div key={active.id}>
          <div>
            <h2>{ active.company }</h2>
            <p>{ active.name }</p>
          </div>
          <p>
            {`R$ ${active.value}`}
          </p>
        </div>
      ))}
    </div>
  );
}
