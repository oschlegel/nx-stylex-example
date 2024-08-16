module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        // When true, StyleX will insert debug class names to identify the source of the styles.
        dev: process.env.NODE_ENV === 'development',
        // When true, StyleX will only output debug classNames identifying the source of the styles.
        test: process.env.NODE_ENV === 'test',
        // Should StyleX generate code to inject styles at runtime? This may be useful during development but should be disabled in production.
        runtimeInjection: false,
        // Enable experimental compile-time optimization to pre-compute stylex.props function calls with conditional styles when all possible styles used are defined in the same file and known at compile-time.
        genConditionalClasses: true,
        // Named imports of StyleX variables are unused after compilation. Some bundlers may remove them as dead code. Causing variables to be undefined. Enable this option to prevent that by adding an import with no specifier. (e.g. import './my-vars.stylex.js')
        treeshakeCompensation: true,
        // Strategy to use for resolving variables defined with stylex.defineVars(). This is required if you plan to use StyleX's theming APIs.
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
        // aliases option allows you to alias project directories to absolute paths, making it easier to import modules.
        aliases: {
          '@nx-stylex-example/ui/*': [
            `${process.env.NX_WORKSPACE_ROOT}/libs/ui/src/lib/*`,
          ],
        },
      },
    ],
  ],
};
