import React, { Component } from 'react';
import MainNavItem from './MainNavItem/MainNavItem';

enum EMenuState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export interface IProps {}

export interface IState {
  menuState: EMenuState;
}

const MAIN_MENU_INACTIVE_CLASS = 'main-menu';
const MAIN_MENU_ACTIVE_CLASS = 'main-menu main-menu--active';
const MOBILE_TOGGLE_INACTIVE_CLASS = 'mobile-toggle';
const MOBILE_TOGGLE_ACTIVE_CLASS = 'mobile-toggle mobile-toggle--active';
const HAMBURGER_INACTIVE_CLASS = 'hamburger hamburger--squeeze';
const HAMBURGER_ACTIVE_CLASS = 'hamburger hamburger--squeeze is-active';

/**
 * Component representing the main site navigation.
 */
class MainNavigation extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      menuState: EMenuState.CLOSED,
    };
    this.onMenuToggle = this.onMenuToggle.bind(this);
  }

  /**
   * Returns true if the mobile menu is toggled open.
   */
  public menuIsOpen(): boolean {
    return this.state.menuState === EMenuState.OPEN;
  }

  /**
   * Toggles the menu state depending on whether it is currently open or closed.
   */
  public onMenuToggle(): void {
    const nextMenuState = this.menuIsOpen() ? EMenuState.CLOSED : EMenuState.OPEN;
    this.setState({ menuState: nextMenuState });
  }

  public render(): JSX.Element {
    return (
      <nav className="main-navigation">
        <div
          className={this.menuIsOpen() ? MOBILE_TOGGLE_ACTIVE_CLASS : MOBILE_TOGGLE_INACTIVE_CLASS}
          data-test="MobileToggle"
        >
          <button
            className={this.menuIsOpen() ? HAMBURGER_ACTIVE_CLASS : HAMBURGER_INACTIVE_CLASS}
            type="button"
            onClick={this.onMenuToggle}
            data-test="Hamburger"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <ul
          className={this.menuIsOpen() ? MAIN_MENU_ACTIVE_CLASS : MAIN_MENU_INACTIVE_CLASS}
          data-test="MainNavigationComponent"
        >
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
  }

}

export default MainNavigation;
