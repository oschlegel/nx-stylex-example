//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
// @ts-expect-error: No type definitions available
const stylexPlugin = require('@stylexjs/nextjs-plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  withNx,
  stylexPlugin({
    aliases: {
      '@nx-stylex-example/ui/*': [
        `${process.env.NX_WORKSPACE_ROOT}/libs/ui/src/lib/*`,
      ],
    },
    rootDir: __dirname,
  }),
];

module.exports = composePlugins(...plugins)(nextConfig);
