import React from 'react';
import MainNavigation from './components/MainNavigation/MainNavigation';

/**
 * Stateless component representing the site header.
 */
const Header: React.FC = () => {
  return (
    <header className="site-header" data-test="HeaderComponent">
      <MainNavigation />
    </header>
  );
};

export default Header;
