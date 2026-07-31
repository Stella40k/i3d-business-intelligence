import clienteService from "./cliente.service.js";

class ClienteController{
    async create(req, res, next){
        try{
            const cliente = await clienteService.create(req.body);
            return res.status(201).json(cliente);
        }catch(error){
            next(error);
        }
    }
    async findAll(req, res, next){
        try {
            const clientes = await clienteService.findAll();
            return res.json(clientes);
        } catch (error) {
            next(error);
        }
    }
    async findById(req, res, next){
        try {
            const cliente = await clienteService.findById(req.params.id);
            return res.json(cliente);
        } catch (error) {
            next(error);
        }
    }
}
export default new ClienteController