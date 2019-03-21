// @ts-check
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = (on, config) => {
   // `on` is used to hook into various events Cypress emits
   // `config` is the resolved Cypress config

   const es5 = false;

   

   on('file:preprocessor', webpackPreprocessor(Object.assign({}, webpackPreprocessor.defaultOptions, {
      webpackOptions: {
         resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
               '~': path.resolve(__dirname, '../../../src'),
            },
         },
         module: {
            rules: [
               {
                  test: !es5 ? /\.tsx?$/ : /\.[jt]sx?$/,
                  exclude: !es5 ? /node_modules/ : undefined,
                  loaders: [
                     {
                        loader: 'babel-loader',
                        options: {
                           babelrc: false,
                           presets: [
                              [
                                 '@babel/env',
                                 {
                                    targets: es5
                                       ? {
                                          safari: 10,
                                          edge: 16,
                                          ie: 11,
                                          browsers: ['last 2 versions'],
                                       }
                                       : {
                                          esmodules: true,
                                       },
                                 },
                              ],
                           ],
                           plugins: [
                              '@babel/plugin-syntax-dynamic-import',
                              '@babel/plugin-proposal-object-rest-spread',
                           ],
                        },
                     },
                     {
                        loader: 'ts-loader',
                        options: {
                           configFile: path.resolve(__dirname, '../../../tsconfig.json'),
                           // disable type checker - we will use it in fork plugin
                           transpileOnly: true,
                        },
                     },
                  ],
               },
            ],
         },
         plugins: [
         ],
      },
   })));
};
