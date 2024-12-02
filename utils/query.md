const dbModule = {
  /**
   * Insere dados em uma tabela.
   * @param {string} tableName Nome da tabela.
   * @param {object} data Objeto com os dados a serem inseridos (coluna: valor).
   * @param {function} callback Função callback (err, result).
   */
  insert: (tableName, data, rules, callback) => {

     const error = validateFields(data, rules)
     if(error) {
         return callback(new Error(error), null)
     }


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
  update: (tableName, data, conditions,rules, callback) => {

    const error = validateFields(data, rules)
    if(error) {
        return callback(new Error(error), null)
    }

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
};

module.exports = dbModule;