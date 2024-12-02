/*route CONTROLLER*/

const db = require('../utils/db');

const{ Router } = require('express');
const route = Router();

//routes
route.get('/',(req, res)=> {
  res.render('index')
})

route.get("/orcamento", (req, res)=> {
    res.render('orcamento')
})
//busca vinda do orçamento
route.post("/busca/:n", (req, res)=> {

    const { numero } = req.body;

    console.log( numero )

})

route.get("/servico/:n?", (req, res)=> {
    res.render('servico')
});

route.get('/users/:id?',(req, res)=> {

  let params = { };


  if(req.params.id) {
      params.id = req.params.id
  }
     

  db.select('user_node', params , (err, results) => {
    if(err) throw res.send('ocorre um erro');
    
      
    const form = `<form action="/create-users" method="post">
    <input type="text" name="email" />
     <input type="password" name="senha" />
      <input type="submit" value="cadastrar"/>
     </form>
     
`;
res.send(`
<div>
<h1>lista de usuário cadastrados</h1>
<pre>${JSON.stringify(results, null, 2)}</pre>
<div>
${form}
</div>
</div>
`)   
  });
    
   
});

route.post('/create-users', (req, res) => {
    
  let {email, senha} = req.body; 
   
   const rules = {
      email : {required : true, type : 'string', maxLength : 50, regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,sanitize : /["'<>\\]/ },
      senha : {required : true, minLength : 6 }
   }


  // if(!email.length && !senha.length) throw res.send('informe um email e senha válidos !')
    
    db.insert('user_node', { email: email , senha: senha},rules, (err, result) => {
      if(err) throw res.send("ocorreu um erro ao cadastrar o usuário: \n <p style='color:red'> "+ err.message + "</p>");
      else  
       res.send(`
        <div><h2>Usuário ${email} cadastrado com sucesso !!</h1></div>
     `);
    });
    email = '', senha = '';
});

route.get('/clientes',(req, res)=> {
   res.render('cliente')
});


module.exports = route;
