import { Router } from "express";
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/user', ApiController.listUser);

export default router;