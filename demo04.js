const koa = require('koa2');
const app = new koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
        <h1>Koa2 request POST</h>
        <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br />
            <p>age</p>
            <input name="age" /><br />
            <p>webSite</p>
            <input name="webSite" /><br /><br />
            <button type="sumbit" />提交</button>
        </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404</h1>';
    }
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})
