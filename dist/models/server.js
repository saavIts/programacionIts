"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const cors_1 = __importDefault(require("cors"));
const conecction_1 = __importDefault(require("../db/conecction"));
class Server {
    constructor() {
        this.apiPath = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
        //Esto puede ser indifinido
        this.port = process.env.PORT || '8100';
        this.middleware();
        this.dbConnection();
        //definimos nuestras rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPath.usuarios, usuarios_1.default);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conecction_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    //funciones que se ejecutan antes de otra ruta
    middleware() {
        //cors
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
        //carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        try {
            this.app.listen(this.port, () => {
                console.log('Servidor corriendo en puerto ' + this.port);
            });
        }
        catch (error) {
            console.log('Ocurrio un error al iniciar el servidor ' + error);
        }
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map