import {Sequelize} from "sequelize";
import {envs} from "./env.js";

export const sequelize = new Sequelize(
    envs.DB_NAME,
    envs.DB_USER,
    envs.DB_PASSWORD,
    {
        host: envs.DB_HOST,
        port: envs.DB_PORT,
        dialect: "postgres",
        logging: envs.NODE_ENV === "development" ? console.log: false, //es para ver en produccion si me estoy trayendo los datos correctoos 
        define:{
            timestamps: true,
            underscored: true, //para traducir camel a snake
            freezeTableName: true //para q respete los nombres de modelos 
        }
    }
)