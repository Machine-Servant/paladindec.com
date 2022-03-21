/** @type {import('next').NextConfig} */
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  // Your existing module.exports
  reactStrictMode: true,
  eslint: {
    dirs: [
      'pages',
      'app',
      'components',
      'config',
      'contexts',
      'graphql',
      'utils',
      'styles',
    ],
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'c2.scryfall.com',
      'c1.scryfall.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: { overrides: { removeViewBox: false } },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
