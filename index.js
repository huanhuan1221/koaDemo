const Koa = require('koa2');
const app = new Koa();
app.use(async (ctx) => {
    ctx.body = 'hello Koa2'
})
app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');