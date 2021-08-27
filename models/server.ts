import express, {Application} from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors'
import db from '../db/conecction';

class Server{

    private app: Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/usuarios',
        cliente: '/api/clientes'
    }

    constructor(){
        this.app = express();

        //Esto puede ser indifinido
        this.port = process.env.PORT || '8100';
        
        this.middleware();

        this.dbConnection();

        //definimos nuestras rutas
        this.routes();
        
    }

    routes(){
        this.app.use(this.apiPath.usuarios, userRoutes)
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online')
        } catch (error) {
            throw new Error(error)
        }
    }
    //funciones que se ejecutan antes de otra ruta
    middleware(){

        //cors
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        //carpeta Publica
        this.app.use(express.static('public'));
    }

    listen(){
        try {
            this.app.listen(this.port, ()=>{
                console.log('Servidor corriendo en puerto '+this.port)
            })
        } catch (error) {
            console.log('Ocurrio un error al iniciar el servidor '+error)
        }
        
    }
}

export default Server;