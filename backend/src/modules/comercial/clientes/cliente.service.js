import clienteRepository from "./cliente.repository.js";

class ClienteService{
    async create(clienteData){
        const clienteNormalizado = {
            ...clienteData,
            nombre: clienteData.nombre.trim(),
            apellido: clienteData.apellido?.trim() || null,
            telefono: clienteData.telefono?.trim() || null,
            email: clienteData.email?.trim() || null,
            empresa: clienteData.empresa?.trim() || null,
            observaciones: clienteData.observaciones?.trim() || null
        };

        return await clienteRepository.create(clienteNormalizado);
    }
    async findAll(){
        return await clienteRepository.findAll();
    }
    async findById(id){
        return await clienteRepository.findById(id);
    }
}
export default new ClienteService();