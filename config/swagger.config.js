const swaggerConfig = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API Documentation',
            version: '1.0.0',
            description: 'API Documentation for Express API',
            contact: {
                name: 'Bayu dani kurniawan',
                email: 'john.doe@example.com',
            },
        },
        servers: [
            {
                url: process.env.BASE_URL || 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: [
        './models/*.js',
        './routes/*.js'
    ]
};

module.exports = swaggerConfig;
