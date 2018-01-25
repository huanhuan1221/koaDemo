const Koa = require('koa2');
const Router = require('koa-router');

const app = new Koa();

//父路由
let home = new Router();
home
    .get('/huanhuan', async (ctx) => {
        ctx.body = 'Page huanhuan';
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'Page todo';
    })

let page = new Router();
page
    .get('/huanhuan', async (ctx) => {
        ctx.body = 'Page huanhuan';
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'Page todo';
    })


//子路由
let router = new Router();
router
    .use('/home', home.routes(), home.allowedMethods())
    .use('/page', page.routes(), page.allowedMethods());




app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('starting at port 3000');
})