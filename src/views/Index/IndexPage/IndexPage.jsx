import React from 'react';

import './IndexPage.scss';
import { cn } from '@bem-react/classname';

const IndexPage = () => {
  const content = cn('Content');

  return (<div className={content()}>index page</div>);
}

export default IndexPage;