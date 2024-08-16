'use client';

import { Button } from '@nx-stylex-example/ui';
import { colors } from '@nx-stylex-example/ui/colors.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  headline: {
    color: colors.primary,
    fontSize: '48px',
    fontWeight: 'bold',
  },
  button: {
    marginTop: '32px',
  },
});

export default function Index() {
  return (
    <div {...stylex.props(styles.base)}>
      <h1 {...stylex.props(styles.headline)}>Hello Friend</h1>
      <Button sx={styles.button} onClick={() => window.alert('<3')}>
        Click Me!
      </Button>
    </div>
  );
}
