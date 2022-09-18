// IMPORTANDO DEPENDENCIAS NESCESSÁRIAS PARA EXECUÇÃO DAS FUNÇÕES
import { Router } from "express";
import * as ApiController from '../controllers/apiController';

const router = Router();

// ROTAS E FUNÇÕES
router.get('/', ApiController.home);
router.post('/newuser', ApiController.addUser);
router.post('/updateuser/:id', ApiController.updateUser);
router.post('/removeuser/:id', ApiController.removeUser);



export default router;