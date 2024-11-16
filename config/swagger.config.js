const swaggerConfig = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API Documentation',
            version: '1.0.0',
            description: 'API Documentation for Express API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ]
    },
    apis: [
        './models/*.js',
        './routes/*.js'
    ]
};

module.exports = swaggerConfig;
