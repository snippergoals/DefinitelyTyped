import * as React from 'react';
import { CSSModule } from '../index';

export interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  disabled?: boolean;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
}

declare class NavLink extends React.Component<NavLinkProps> {}
export default NavLink;
