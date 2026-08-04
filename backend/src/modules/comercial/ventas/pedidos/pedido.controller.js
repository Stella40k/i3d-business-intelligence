import pedidoService from "./pedido.service.js";

class PedidoController{
    async create(req, res, next){
        try {
            if(!req.body || !req.body.titulo){
                return res.status(400).json({
                    message: "El titulo es obligatorio para crear el pedido."
                })
            }
            const pedido = await pedidoService.create(req.body);
            return res.status(201).json(pedido);
        } catch (error) {
            console.error("Nombre:", error.name);
            console.error("Mensaje:", error.message);
            console.error("Original:", error.original);
            console.error("Parent:", error.parent);
            next(error);
        }
    }
    async findAll(req, res, next){
        try {
            const pedidos = await pedidoService.findAll();
            return res.json(pedidos)
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
    async findById(req, res, next){
        try {
            const pedido = await pedidoService.findById(req.params.id);
            if(!pedido){
                return res.status(404).json({
                    message: "Pedido no encontrado."
                })
            }
            return res.json(pedido);
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
    async update(req, res, next){
        try {
            const pedido = await pedidoService.update(
                req.params.id,
                req.body
            );
            if(!pedido){
                return res.status(404).json({
                    message: "Pedido no encontrado."
                });
            }
            return res.json(pedido);
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
    async delete(req, res, next){
        try {
            const pedido = await pedidoService.delete(req.params.id);
            if(!pedido){
                return res.status(404).json({
                    message: "Pedido no encontrado."
                });
            }
            return res.json({
                message: "Pedido eliminado correctamente."
            })
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
}
export default new PedidoController();