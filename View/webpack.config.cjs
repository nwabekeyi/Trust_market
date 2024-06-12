const path = require('path');
const fs = require('fs');
const { GenerateSW } = require('workbox-webpack-plugin');

// Function to process imports and add .jsx extension if necessary
function addJsxExtension(source) {
  const importsRegex = /import\s+.*\s+from\s+['"](.*)['"];?/g;
  return source.replace(importsRegex, (match, importPath) => {
    const resolvedPath = path.resolve(path.dirname(this.resourcePath), importPath);
    if (!path.extname(importPath) && fs.existsSync(`${resolvedPath}.jsx`)) {
      return match.replace(importPath, `${importPath}.jsx`);
    }
    return match;
  });
}

// Custom loader
function customLoader(source) {
  return addJsxExtension.call(this, source);
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
          test: /\.jsx?$/, // Handle both .js and .jsx files
          exclude: /node_modules/,
          use: [
            {
              loader: path.resolve(__dirname, 'custom-loader.js'), // Use the custom loader inline
            },
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          ],
        },
        {
          test: /\.css$/, // Add loader for CSS files
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css'], // Include extensions
      mainFiles: ['index'], // Ensure main files like index.js are resolved
      alias: {
        '@Routes': path.resolve(__dirname, 'src/components/Routes'),
        '@context': path.resolve(__dirname, 'src/context/context'),
      },
    },
    plugins: [
      new GenerateSW({
        exclude: [/exclude/, 'example.html'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
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
