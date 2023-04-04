import React from 'react';

import { cn } from '@bem-react/classname';
import Container from '../Container/Container';

import './Header.scss';

const Header = () => {
  const header = cn('Header');

  return (
    <div className={header()}>
      <Container>header</Container>
    </div>
  );
}

export default Header;