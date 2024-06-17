const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./model/connectDB');
const rateLimit = require('express-rate-limit');
const {
    registerAdmin,
    registerBuyer,
    registerSeller,
    loginAdmin,
    loginBuyer,
    loginSeller,
    loginSuperadmin,
    registerSuperadmin,
    refreshToken,
    logoutUser,
    getUser,
    getAllUser,
    postProduct,
    getAllProducts,
    getOneProduct,
    productRating
} = require("./routes");

const app = express();
const port = 5000;

connectDB();

// cors middleware
// Define allowed origins
const allowedOrigins = [
    'http://localhost:5173',
    'https://trust-market-frontend.vercel.app/'
];

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Too many requests from this IP, please try again after 15 minutes',
});

// Apply the rate limiter to all requests
app.use('/api/', apiLimiter);
// Configure CORS middleware
app.use(cors({
    origin: allowedOrigins
}));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Specify the path to the directory containing the static files
const staticFilesDir = path.join(__dirname, '../View/dist');

// Serve static files from the directory containing index.html
app.use(express.static(staticFilesDir, {
    etag: true, // Enable ETag generation
    lastModified: true, // Enable Last-Modified header
    setHeaders: (res, path) => {
        const cacheControl = 'public, max-age=31536000'; // Cache for 1 year
        res.setHeader('Cache-Control', cacheControl);
    }
}));
// Routes
app.use(registerSuperadmin);
app.use(registerAdmin);
app.use(registerBuyer);
app.use(registerSeller);
app.use(loginAdmin);
app.use(loginBuyer);
app.use(loginSeller);
app.use(loginSuperadmin);
app.use(refreshToken);
app.use(logoutUser);
app.use(getAllUser);
app.use(getUser);
app.use(postProduct);
app.use(getAllProducts);
app.use(getOneProduct);
app.use(productRating)


// Route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesDir, 'index.html'));
});

// Check if the current process is the master process
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers equal to the number of CPU cores
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for when a worker exits
    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
        // Fork a new worker to replace the one that died
        cluster.fork();
    });
} else {
    // Worker processes will handle incoming connections
    app.listen(port, () => {
        console.log(`Worker ${process.pid} is running on port ${port}`);
    });
}
