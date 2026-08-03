import Pedido from "./pedido.model.js";

class PedidoRepository{
    async create(peidoData){
        return await Pedido.create(peidoData);
    }
    async findAll(){
        return await Pedido.findAll();
    }
    async findById(id){
        return await Pedido.findByPk(id)
    }
    async update(id, pedidoData){
        const pedido = await this.findById(id);
        if(!pedido){
            return null
        }
        await pedido.update(pedidoData);
        return pedido;
    }
    async delete(id){
        const pedido = await this.findById(id);
        if(!pedido){
            return null;
        }
        await pedido.update({
            activo: false
        });
        return pedido;
    }
}
export default new PedidoRepository();