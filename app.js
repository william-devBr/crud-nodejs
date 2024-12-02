const express = require("express");
const app =  express();
const router = require('./routes/index');

const { engine } = require("express-handlebars");

//set view engine
app.engine("handlebars", engine({defaultLayout: 'main'}))
app.set('view engine','handlebars');
app.set("views", "./views");

// set path

app.use(express.static('public'));


router(app,express);



let PORT =  process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`app sever listen in port ${PORT}`)
})