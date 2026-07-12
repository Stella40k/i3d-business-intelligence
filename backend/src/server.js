//inicio el serv
import app from "./app.js";
import { envs } from "./config/env.js";
import {sequelize} from "./config/database.js"

const startServer = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Conectado a Postgre");

        app.listen(envs.PORT, ()=>{
            console.log("Servidor inicializado"),
            console.log(`Ambiente: ${envs.NODE_ENV}`),
            console.log(`Puerto: ${envs.PORT}`)
        });
    } catch (error) {
        console.error("Error al conectar con Postgre"),
        console.log(error),
        console.error(error.message);
        process.exit(1);
    }
};
startServer();