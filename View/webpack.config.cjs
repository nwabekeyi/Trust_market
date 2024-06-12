const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');

class AddJsxExtensionPlugin {
  apply(resolver) {
    resolver.getHook('resolve').tapAsync('AddJsxExtensionPlugin', (request, resolveContext, callback) => {
      const newRequest = Object.assign({}, request);
      if (!path.extname(newRequest.request)) {
        newRequest.request += '.jsx';
      }
      resolver.doResolve('resolve', newRequest, null, resolveContext, callback);
    });
  }
}

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: './src/main.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/, // Add loader for CSS files
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', ''], // Include empty string to resolve files without extensions
      mainFiles: ['index'], // Ensure main files like index.js are resolved
      alias: {
        '@Routes': path.resolve(__dirname, 'src/components/Routes'),
        '@context': path.resolve(__dirname, 'src/context/context'),
      },
      plugins: [
        new AddJsxExtensionPlugin(), // Add custom resolver plugin
      ],
    },
    plugins: [
      new GenerateSW({
        exclude: [/exclude/, 'example.html'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request, url }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for a week
              },
            },
          },
          {
            urlPattern: /\/api\//,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 5 * 60, // Cache for 5 minutes
              },
            },
          },
        ],
        skipWaiting: true,
      }),
    ],
    stats: {
      errorDetails: true, // Enable detailed error reporting
    },
  };
};
