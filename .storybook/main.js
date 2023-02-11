const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            /**
             * NOTE: fix Storybook issue with PostCSS@8
             * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
             */
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    webpackFinal: async (config) => {
        // config.module.rules.push({
        //     test: /\.scss$/,
        //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        // });

        config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.module\.css$/;

        config.module.rules.push({
            test: /\.module\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('tailwindcss'), require('autoprefixer')]
                        }
                    }
                }
            ]
        });

        config.resolve.alias = {
            'next/image': path.resolve(__dirname, 'nextImageMock.js')
        };

        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions
            })
        ];

        /**
         * Fixes font import with /
         * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
         */
        config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

        return config;
    },
    staticDirs: ['../public']
};
