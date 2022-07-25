import React from 'react';
import CardActives from '../components/CardActives';
import Header from '../components/Header';
import db from '../assets/dataBase.json';

export default function Explore() {
  const { actives } = db;
  return (
    <>
      <Header />
      <h1>Explore suas opções</h1>
      <div>
        {actives?.map((active) => (
          <div key={active.id}>
            <CardActives
              company={active.company}
              name={active.name}
              value={active.value}
            />
          </div>
        ))}
      </div>
    </>
  );
}
