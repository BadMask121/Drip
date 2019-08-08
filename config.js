const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    schema:  './src/schema/dripSchema.graphql',
    access_secret: process.env.ACCESS_SECRET,
    port: process.env.PORT,
    stage: {
        DEVELOPMENT: "development",
        PRODUCTION: "production"
    },
    env: process.env.NODE_ENV
};