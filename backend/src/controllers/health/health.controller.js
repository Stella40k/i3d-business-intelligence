export const healthCheck = (req, res)=>{
    return res.status(200).json({
        secccess: true,
        message: "Servidor funcionando",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
};