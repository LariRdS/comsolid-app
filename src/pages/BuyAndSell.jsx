import React from 'react';
import Header from '../components/Header';
import CardActives from '../components/CardActives';
import db from '../assets/dataBase.json';

export default function BuyAndSell() {
  const { actives } = db;
  return (
    <div>
      <Header />
      <div>
        {actives?.map((active) => (
          <div key={active.id}>
            <CardActives
              company={active.company}
              name={active.name}
              value={active.value}
            />
            <button type="button">COMPRAR</button>
            <button type="button">VENDER</button>
          </div>
        ))}
      </div>
    </div>
  );
}
