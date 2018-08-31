// /* eslint "no-console": off */
const createError = require('http-errors');
const basicauth = require('basic-auth');

export function basicAuth(req, res, next) {
    let cred = basicauth(req);
    if (cred && cred.name === 'spark' && cred.pass === 'testing1') {
        return next();
    }
    return next(createError(401, 'Please login to view this page.'));
}