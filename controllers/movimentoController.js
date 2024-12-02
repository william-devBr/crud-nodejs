const movimentoModels = require('../models/movimentoModels');

class movimentoController{

   movimentos(req, res){

        const { id } = req.params;
        try{
            const result =  movimentoModels.select(id);
            return result.then(data => res.status(200).json(data)).catch(err => console.error(err))
            
            }catch(e) {
            console.error(`Ocorreu um erro na consulta: ${e}`);
             return  res.status(500).json({e: "Erro ao obter movimentos"})
            }
  
   }

   criar(req, res) {
    
        const {descricao, valor} = req.body
        const result = movimentoModels.insert([descricao, valor]);
        return result.then(data => res.status(201).json(data)).catch(err => console.error(err))
   }

   atualizar(req, res) {
     
    const params = req.body;
    const id = req.params.id;

    const result = movimentoModels.update(params, id);

    return result.then(data => res.status(200).json(data))
                  .catch(err => console.log(err));

   }

   apagar(req, res) {

     const id = req.params.id;
     const result = movimentoModels.delete(id);
     return result.then( data => res.status(200).json(data)).catch(err => console.error(err))
   }
}

module.exports = new movimentoController();