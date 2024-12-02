const mysql = require("mysql");

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud'
});

// Conecta ao banco de dados
sql.connect((err) => {
  if (err) {
   throw console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados MySQL.");
    init();
  }
});

const init = ()=> {
  sql.query(`
             CREATE TABLE IF NOT EXISTS movimento(
             id INT NOT NULL AUTO_INCREMENT,
             descricao VARCHAR(100),
             valor FLOAT,
             created DATETIME,
             PRIMARY KEY(id)
             )

          `,(err, results)=> {
     if(err) {
         console.log('ocorreu um erro ao criar a tabela movimento '+err.message)
     }else {
      console.log('tabela criada com sucesso');
     }
      })
}

const validateFields = (data, rules) => {

     for(const field in rules) {

         let value = data[field];
          const validate = rules[field];
          if(validate.type ==='string') {
               value = value.replace(/["',\\]/g,"");
          }

        if(validate.required && (value === undefined || value === null || value === '')) {
              return `o campo ${field} é obrigatório`;
        }

        if(validate.type && typeof validate === validate.type) {
            return `o campo ${field} deve ser do tipo ${validate.type}`
        }

        if(validate.minLength && value.length < validate.minLength) {
            return `o campo ${field} precisa ter no mínimo ${validate.minLength} caracteres`;
        }

        if(validate.maxLength && value.length > validate.maxLength) {
            return `o campo ${field} deve ter no máximo ${validate.maxLength} caracteres`;
        }

        if(validate.regex && !validate.regex.test(value) && validate.sanitize.test(value)) {
             return `o campo ${field} possui um formato inválido`;
        }
     }
     return null;
}

// Define o módulo com os métodos CRUD
// const dbModule = {

// };

module.exports = sql;
