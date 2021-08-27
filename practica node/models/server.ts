import express,{ Application } from "express";
import userRoutes from '../routes/usuario';
import cors from 'cors'

class Server{
    private app: Application;
    private port: string;
    private apiPath = {
        ususarios: '/api/usuarios',
        clientes: '/api/clientes'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();


    }

    routes(){
        this.app.use(this.apiPath.ususarios, userRoutes)
    }

    middlewares(){
        //cors
        this.app.use(cors())

        //lectura body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'))
    }
}