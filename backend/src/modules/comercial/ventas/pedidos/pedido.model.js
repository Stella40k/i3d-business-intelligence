import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../../../config/database.js";

class Pedido extends Model{}

Pedido.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        clienteId:{
            type: DataTypes.UUID,
            allowNull: false
        },
        titulo:{
            type: DataTypes.STRING(200),
           allowNull: false 
        },
        descripcion:{
            type: DataTypes.STRING(200),
            allowNull: true
        },

        estado:{
            type: DataTypes.ENUM(
                "Presupuesto",
                "Aprobado",
                "Diseno",
                "Impresion",
                "Postprocesado",
                "Listo para entregar",
                "Entregado",
                "Cancelado"
            ),
            allowNull: false,
            defaultValue: "Presupuesto"
        },
        prioridad:{
            type: DataTypes.ENUM(
                "Baja",
                "Media",
                "Alta",
                "Urgente"
            ),
            allowNull: false,
            defaultValue: "Media"
        },
        precioTotal:{
            type:DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        montoSenia:{
            type:DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        estadoPago:{
            type: DataTypes.ENUM(
                "Efectivo",
                "Transferencia",
                "Mixto"
            ),
            allowNull: false,
            defaultValue: "Transferencia"
        },
        fechaPedido: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        fechaSenia:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaEntregaEstimada:{
            type: DataTypes.DATE,
            allowNull: true
        },
        fechaEntregaReal:{
            type: DataTypes.DATE,
            allowNull: true
        },
        observaciones:{
            type:DataTypes.STRING(200),
            allowNull: true
        },
        notasInternas:{
            type: DataTypes.STRING(200),
            allowNull: true
        },
        activo:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

    },{
        sequelize,
        modelName: "Pedido",
        tableName: "pedidos",
        timestamps: true
    }
);
export default Pedido;