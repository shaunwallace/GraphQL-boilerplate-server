const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const winston = require('winston');
const router = require('./src/routes');

const PORT = process.env.PORT || 3000;
const app = new Koa();

app
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT, () => {
    winston.log('info', `GraphQL Server is now running hot on http://localhost:${PORT}/graphql`);
});
