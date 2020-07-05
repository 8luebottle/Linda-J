require =  require('esm')(module);
module.exports = require('./app');
require('dotenv').config({path:'.env'});

export const {API_TOKEN} = process.env.LINDA_J_ACCESS_TOKEN;
