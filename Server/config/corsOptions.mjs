import allowedOrigins from './allowedOrigins.mjs';

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

export default corsOptions;