const db = require('../utils/db');

class movimentoModels{

    executeQuery(sql, params = []) {
        return new Promise((resolve, reject)=>{

            db.query(sql,params,(err,result)=> {
                if(!err) {
                  resolve(result)
                }
                 reject(err);
             })
        })

    }

    select(id){
        let sql = "SELECT * FROM movimento ";
        const params = [];
        if(id) {
            sql += "WHERE id = ?";
            params.push(id)
        }
        return  this.executeQuery(sql, params);
    }

    insert(params) {

        let sql = "INSERT INTO movimento(descricao, valor, created) VALUES(?,?,NOW())";
        return this.executeQuery(sql, params)
    }

    update(params, id) {

        const fields = Object.keys(params).map(key => `${ key }= ?`).join(",");
        const valores = Object.values(params);

        valores.push(id);

       const sql = `UPDATE movimento SET ${fields} WHERE id = ?`;
       return this.executeQuery(sql,valores);

    }

    delete(id) {

        const sql = "DELETE FROM movimento WHERE id =?";
        return this.executeQuery(sql, [id]);
    }
   
}

module.exports = new movimentoModels();