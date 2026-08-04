import pedidoRepository from "./pedido.repository.js";

class PedidoService{
    async create(pedidoData){
        const pedidoNormalizado ={
            ...pedidoData,
            titulo: pedidoData.titulo.trim(),
            descripcion: pedidoData.descripcion?.trim()||null,
            observaciones: pedidoData.observaciones?.trim()||null,
            notasInternas: pedidoData.notasInternas?.trim()||null,
            precioTotal:Number(pedidoData.precioTotal ?? 0),
            montoSenia:Number(pedidoData.montoSenia ?? 0),
        }
        console.log("Pedido normalizado:");
        console.log(pedidoNormalizado);

        return await pedidoRepository.create(pedidoNormalizado);
    }
    async findAll(){
        return await pedidoRepository.findAll();
    }
    async findById(id){
        return await pedidoRepository.findById(id)
    }
    async update(id, pedidoData){
        const pedidoNormalizado ={
            ...pedidoData,
            titulo: pedidoData.titulo?.trim(),
            descripcion: pedidoData.descripcion?.trim()||null,
            observaciones: pedidoData.observaciones?.trim()||null,
            notasInternas: pedidoData.notasInternas?.trim()||null,
            precioTotal: pedidoData.precioTotal !== undefined ? Number(pedidoData.precioTotal) : undefined,
            montoSenia: pedidoData.montoSenia !== undefined ? Number(pedidoData.montoSenia) : undefined,
        }
        return await pedidoRepository.update(id, pedidoNormalizado);
    }
    async delete(id){
        return await pedidoRepository.delete(id);
    }
}
export default new PedidoService();