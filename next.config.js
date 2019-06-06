const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules");

module.exports = withFonts(
  withCSS(
    withSass(
      withTypescript(
        withTM({
          webpack(config, options) {
            // Do not run type checking twice:
            if (options.isServer) {
              config.plugins.push(new ForkTsCheckerWebpackPlugin());
            }

            return config;
          },
          transpileModules: ["azure-devops-ui"]
        })
      )
    )
  )
);
