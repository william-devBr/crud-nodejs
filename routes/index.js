const movimentoRoute = require('./movimentoRouter');
const bodyParser = require("body-parser");

module.exports = (app,express) =>{

   app.use(express.json());
   app.use(bodyParser.urlencoded({extended : false}));
   app.use(movimentoRoute);
}