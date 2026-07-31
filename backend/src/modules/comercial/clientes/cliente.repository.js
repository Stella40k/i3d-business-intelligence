import Cliente from "./cliente.model.js";

class ClienteRepository{
    //manejo otra clase porque quiero agrupar operaciones relacionadas
    async create(clienteData){
        return await Cliente.create(clienteData);
    }
    async findAll(){
        return await Cliente.findAll();
    }
    async findById(id){
        return await Cliente.findByPk(id); 
    }
}

export default new ClienteRepository();