import app from './app.js'

const port = process.env.port || 8080;

app.listen(port,()=>{
    console.log('Listening to port ',port);
});