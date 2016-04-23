switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod');
        break;
    case 'test':
    case 'testing':
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.dev');
}