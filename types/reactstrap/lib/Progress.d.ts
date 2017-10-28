import { CSSModule } from '../index';

export interface ProgressProps {
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
  barClassName?: string;
}

export const Progress: React.StatelessComponent<ProgressProps>;
