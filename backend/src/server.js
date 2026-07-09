//inicio el serv
import app from "./app.js";
import { envs } from "./config/env.js";

app.listen(envs.PORT, ()=>{
    console.log("Servidor iniciado");
    console.log(`Ambiente: ${envs.NODE_ENV}`)
    console.log(`Puerto: ${envs.PORT}`)
})