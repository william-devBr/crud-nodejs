const mysql = require('mysql')

const sql = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database: 'banco_padrao'
})

slq.connect((err)=>{
   if(err) throw console.log(`ocorre um erro ao conectar com o banco de dados, verifque !`);

   console.log('conectado com sucesso!');
})

class Db {
     /**
   * Insere dados em uma tabela.
   * @param {string} tableName Nome da tabela.
   * @param {object} data Objeto com os dados a serem inseridos (coluna: valor).
   * @param {function} callback Função callback (err, result).
   */
  insert: (tableName, data, callback) => {
    const query = `INSERT INTO ?? SET ?`;
    sql.query(query, [tableName, data], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },

  /**
   * Seleciona dados de uma tabela com condições opcionais.
   * @param {string} tableName Nome da tabela.
   * @param {object} [conditions] Objeto com as condições WHERE (coluna: valor).
   * @param {function} callback Função callback (err, results).
   */
  select: (tableName, conditions = {}, callback) => {
    let query = `SELECT * FROM ??`;
    const params = [tableName];

    if (Object.keys(conditions).length > 0) {
      query += ` WHERE ?`;
      params.push(conditions);
    }

    sql.query(query, params, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  /**
   * Atualiza dados em uma tabela.
   * @param {string} tableName Nome da tabela.
   * @param {object} data Objeto com os dados a serem atualizados (coluna: valor).
   * @param {object} conditions Objeto com as condições WHERE (coluna: valor).
   * @param {function} callback Função callback (err, result).
   */
  update: (tableName, data, conditions, callback) => {
    const query = `UPDATE ?? SET ? WHERE ?`;
    sql.query(query, [tableName, data, conditions], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },

  /**
   * Deleta dados de uma tabela.
   * @param {string} tableName Nome da tabela.
   * @param {object} conditions Objeto com as condições WHERE (coluna: valor).
   * @param {function} callback Função callback (err, result).
   */
  delete: (tableName, conditions, callback) => {
    const query = `DELETE FROM ?? WHERE ?`;
    sql.query(query, [tableName, conditions], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },
}

module.exports = Db
