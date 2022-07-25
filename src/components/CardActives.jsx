import React from 'react';
import PropTypes from 'prop-types';

export default function CardActives({ company, name, value }) {
  return (
    <div>
      <div>
        <div>
          <h2>{ company }</h2>
          <p>{ name }</p>
        </div>
        <p>
          {`R$ ${value}`}
        </p>
      </div>

    </div>
  );
}

CardActives.propTypes = {
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
