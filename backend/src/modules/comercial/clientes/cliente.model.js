import {DataTypes, Model} from "sequelize";
import {sequelize} from  "../../../config/database.js";

class Cliente extends Model {}
//clase porque las filas de la tabla seran objetos (Cliente)


Cliente.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING(150),
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING(150),
        allowNull: true
    },
    telefono:{
        type: DataTypes.STRING(30),
        allowNull: true
    },
    email:{
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    empresa:{
        type: DataTypes.STRING(150),
        allowNull: true
    },
    canalOrigen:{
        type: DataTypes.ENUM(
            "Instagram",
            "WhatsApp",
            "Facebook",
            "Feria",
            "Recomendacion",
            "Pagina Web",
            "Otro"
        ),
        allowNull: false,
        defaultValue: "Otro"
    },
    observaciones:{
        type:DataTypes.TEXT,
        allowNull: true
    },
    activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
},{
    sequelize,
    modelName: "Cliente",
    tableName: "clientes",
    timestamps: true
}
);
export default Cliente;