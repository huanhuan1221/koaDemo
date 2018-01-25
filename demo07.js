const Koa = require('koa2');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix:'/demo'
});

router.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa-router';
})
.get('/todo',(ctx,next)=>{
    ctx.body='todo page';
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('starting at port 3000');
})