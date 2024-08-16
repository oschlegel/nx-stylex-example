import * as stylex from '@stylexjs/stylex';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { colors } from './colors.stylex';

const styles = stylex.create({
  base: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: colors.primary,
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    borderStyle: 'none',
    cursor: 'pointer',
  },
});

type ButtonProps = PropsWithChildren<
  {
    sx?: stylex.StyleXStylesWithout<typeof styles.base>;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button: FC<ButtonProps> = ({ children, sx, ...props }) => {
  return (
    <button {...stylex.props(styles.base, sx)} {...props}>
      {children}
    </button>
  );
};
