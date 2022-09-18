// IMPORTANDO DEPENDENCIAS NESCESSÁRIAS PARA EXECUÇÃO DAS FUNÇÕES
import { Request, Response } from "express";
import { User } from "../modules/User";




/*------------------------------------------------------------------------
PEGANDO TODOS OS USUARIOS SALVOS NO BANCO DE DADOS
Encontrando todos os usuários salvos no DB e listando na página principal
------------------------------------------------------------------------*/
export const home = async (req:Request, res:Response)=>{
    let users = await User.findAll(); 
    res.render('index', {users} ); 
}

/*------------------------------------------------------------------------
ADICIONANDO NOVO USUARIO
Pegando todos os valores enviados através do Body e criando um novo usuario.
Por fim salvo esses valores e rediricionando para página principal.
------------------------------------------------------------------------*/
export const addUser = async (req:Request, res:Response)=>{
    let {name, email, age} = req.body 
    if(name && email && age) {
        let newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            age: parseInt(req.body.age)
        });
        
        newUser.save();
        res.redirect('/');

    } else {
        console.log({ error: 'Usuário não cadastrado' });
    }
}

/*------------------------------------------------------------------------
ATUALIZANDO DADOS DO USUARIO
Encontrando o usuario atraves do ID enviado e atualizando as informações desejadas.
------------------------------------------------------------------------*/
export const updateUser = async (req: Request, res: Response) =>{
    let id = parseInt(req.body.id);
    let userUpdate = await User.findByPk(id);
    
    if(userUpdate) {
        if(req.body.name){
            userUpdate.name = req.body.name
        }
        if (req.body.email) {
            userUpdate.email = req.body.email
        }
        if (req.body.age) {
            userUpdate.age = parseInt(req.body.age)
        }
        await userUpdate.save();  
    } else {
        console.log('Usuario não encontrado');
    }
    res.redirect('/');
}

/*------------------------------------------------------------------------
DELETANDO USUARIO
Encontrando usuario atraves do ID enviado, e deletando.
------------------------------------------------------------------------*/
export const removeUser = async (req: Request, res: Response) => {
    let id = parseInt(req.body.id);
    let user = await User.findByPk(id);

    if(user){
        user.destroy();
    }
    res.redirect('/');
}

