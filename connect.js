const Koa=require('koa2');
const Router=require('koa-router');
const Monk=require('monk');

const app=new Koa();
const router=new Router();
const db=new Monk('localhost/company');
const workmates=db.get('workmate');

app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})

router.get('/',async(ctx)=>{
    ctx.response.type='text/html';
    ctx.body='hi';
})

router.get('/getList',async(ctx)=>{
    let st=await workmates.find();
    ctx.response.type='application/json';
    ctx.body=st;
})

app.use(router.routes());
app.listen(4000,()=>{
    console.log('[myapp] 已经运行，端口为4000');
})