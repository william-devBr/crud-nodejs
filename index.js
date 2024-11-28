const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const db = require('./utils/db')

const PORT = process.env.PORT || 3000

app.use(bodyPaser.urlencode({extended: true}))

app.get('/users/:id?',(req,res) => {
  
 //rota para listar os usuários cadastrados

  const params = {};

   if(req.params.id) {
        // se existir query id na URL atribui ao @params
       params.id = req.params.id;
   }
  db.select('users', params,(err,results)=> {
        if(err) throw console.log(`ocorreu um erro ${err}`);

         // responde a busca com dados em JSON
        res.json(results);
       
  })

});

app.post('/create-user',(req,res)=> {

     const {nome,email} = req.body; 
    if(!email.length && !nome.length) throw console.log('preencha os campos \"nome\" e \"email\" corretamente !');

   db.insert('users',{nome : nome, email : email},(err, results) => {
          if(!err) {
            res.send(`<h3>cadastrado com sucesso !</h3>`);
          }else {
            console.log('ocorreu um erro ao efetuar o cadastro, tente novamente');
          }
   })
})

app.post('/delete/:id',(req,res) => {

     const {id} = req.body;
  
    db.delete('users',{id : id },(err,results)=>{
           if(err) throw console.log(`ocorreu um erro ${err}`);

        console.log('usuário deletado com sucesso ');
    })
})

app.post('/update/:id',(req,res) => {

     const {name, email} = req.body; 

    f(!email.length && !name.length) throw console.log('preencha os campos \"nome\" e \"email\" corretamente !');

    db.update('users',{name : name, email : email , (err,results) => {
             if(err) throw console.log(`ocorreu um erro ${err}`);

              else 
                 console.log('dados atualizados com sucesso');
    })
  
})

app.listen(PORT,'localhost',()=> {
  console.log(`servior rodando na porta ${PORT}`)
})
