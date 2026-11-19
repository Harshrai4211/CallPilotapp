import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [active, setActive] = useState(null);

  const open = useCallback((name) => setActive(name), []);
  const close = useCallback(() => setActive(null), []);

  const value = useMemo(() => ({ active, open, close }), [active, open, close]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
