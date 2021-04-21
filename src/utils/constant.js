const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    URL_SHORTENER_API: process.env.URL_SHORTENER_API
}