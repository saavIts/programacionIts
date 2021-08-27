import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = (req: Request, res: Response)=>{
    
    const usuarios = Usuario.findAll();
    res.json({
        msg: 'getUsuarios'
    })
}

export const getUsuario = (req: Request, res: Response)=>{
    
    const {id} = req.params
    
    res.json({
        msg: 'getUsuario'
    })
}

export const postUsuario = (req: Request, res: Response)=>{
    
    const {body} = req;
    
    res.json({
        msg: 'postUsuario'
    })
}

export const putUsuario = (req: Request, res: Response)=>{
    
    const {body} = req;
    
    res.json({
        msg: 'postUsuario'
    })
}

export const deleteUsuario = (req: Request, res: Response)=>{
    
    const {body} = req;
    
    res.json({
        msg: 'postUsuario'
    })
}