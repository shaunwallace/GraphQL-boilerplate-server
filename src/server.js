import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import winston from 'winston';
import router from './routes';

const PORT = 3000;
const app = new Koa();

app
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT, () => {
    winston.log('info', `GraphQL Server is now running on http://localhost:${PORT}/graphql`);
});
