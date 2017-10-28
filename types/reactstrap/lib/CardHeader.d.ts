import { CSSModule } from '../index';

export interface CardHeaderProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const CardHeader: React.StatelessComponent<CardHeaderProps>;
