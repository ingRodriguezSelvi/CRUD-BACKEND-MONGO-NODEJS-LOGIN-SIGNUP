const express = require('express');
const path=require('path');
const exphbs=require('express-handlebars')
const methoOverride=require('method-override');
const session=require('express-session');
//Initilizations
const app=express();
require('./dataBase')
//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({ //config views
    defaultLayout:'main',
    layoutsDirL:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs'
}) );
app.set('view engine','.hbs');

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methoOverride('_method')); //Formulario puedan enviar otro tipos de metodos
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
    
}));
//Global Varaibles

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));
//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server Starning
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});
