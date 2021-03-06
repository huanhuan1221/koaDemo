const Koa=require('koa2');
const app=new Koa();

app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'MyName','huanhuan',{
                domain:'127.0.0.1',// 写cookie所在的域名
                path:'/index', //写入coolie 的路径
                maxAge:1000*60*60*24, //cookie的有效时长
                expires:new Date('2018-12-31'),// cookie失效时间
                httpOnly:false,//是否只用于http请求
                overwrite:false //是否允许重写
            }
        )
        ctx.body='cookie is ok';
    }else{
        ctx.body='hello world';
    }
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})