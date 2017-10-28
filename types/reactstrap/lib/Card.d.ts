import { CSSModule } from '../index';

export interface CardProps {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
}

export const Card: React.StatelessComponent<CardProps>;
