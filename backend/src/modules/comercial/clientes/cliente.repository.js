import Cliente from "./cliente.model.js";

class ClienteRepository{
    //manejo otra clase porque quiero agrupar operaciones relacionadas
    async create(clienteData){
        return await Cliente.create(clienteData);
    }
    async findAll() {
        return await Cliente.findAll({
            where: {
                activo: true
            }
        });
    }
    async findById(id){
        return await Cliente.findByPk(id); 
    }
    async update(id, clienteData){
        const cliente = await Cliente.findByPk(id);
        if(!cliente){
            return null
        }
        await cliente.update(clienteData)
        return cliente;
    }
    async delete(id){
        const cliente = await Cliente.findByPk(id);
        if(!cliente){
            return null;
        }
        await cliente.update({
            activo: false
        })
        return cliente;
    }
}

export default new ClienteRepository();