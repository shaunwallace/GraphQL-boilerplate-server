const graphiqlKoa = require('graphql-server-koa').graphiqlKoa;
const graphqlKoa = require('graphql-server-koa').graphqlKoa;
const Router = require('koa-router');
const schema = require('./data/schema');

const router = new Router();

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

router.get('/', async (ctx) => {
    ctx.body = 'Hello World Ive got routes';
    return ctx;
});

router.get('/user', async (ctx) => {
    ctx.set({
        'Content-Type': 'application/json; charset=utf-8',
        'Last-Modified': new Date(),
        'Referrer-Policy': 'origin',
    });

    ctx.body = JSON.stringify({
        id: 1234,
        firstname: 'jon',
        lastName: 'doe',
    });

    return ctx;
});

module.exports = router;
