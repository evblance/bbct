import React from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  name: string;
  linkTarget: string;
}

/**
 * Stateless component representing a main navigation item.
 */
const MainNavItem: React.FC<IProps> = ({ name, linkTarget }: IProps) => {
  return (
    <li className="main-menu__item" data-test="MainNavItemComponent">
      <Link className="main-menu__link" to={linkTarget}>
        {name}
      </Link>
    </li>
  );
};

export default MainNavItem;
