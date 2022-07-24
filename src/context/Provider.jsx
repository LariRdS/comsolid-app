import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

export default function Provider({ children }) {
  const [user, setUser] = useState();
  const [auth, setAuth] = useState(false);
  const [activesData, setActivesData] = useState();

  const values = useMemo(() => ({
    user,
    setUser,
    auth,
    setAuth,
    activesData,
    setActivesData,
  }), []);

  return (
    <context.Provider value={values}>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
