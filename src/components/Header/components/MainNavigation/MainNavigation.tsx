import React from 'react';
import MainNavItem from './MainNavItem/MainNavItem';

/**
 * Stateless component representing the main site navigation.
 */
const MainNavigation: React.FC = () => {
  return (
    <nav className="main-navigation">
      <ul className="main-menu" data-test="MainNavigationComponent">
        <MainNavItem
          name="Home"
          linkTarget="/"
        />
        <MainNavItem
          name="Consult"
          linkTarget="/"
        />
        <MainNavItem
          name="Implement"
          linkTarget="/"
        />
        <MainNavItem
          name="Manage"
          linkTarget="/"
        />
        <MainNavItem
          name="About"
          linkTarget="/"
        />
        <MainNavItem
          name="Contact"
          linkTarget="/"
        />
      </ul>
    </nav>
  );
};

export default MainNavigation;
