// IMPORTANDO DEPENDENCIAS NESCESSÁRIAS PARA EXECUÇÃO DAS FUNÇÕES
import express, { Request, Response} from "express";
import dotenv from 'dotenv';
import path  from "path";
import router from './routes/api';
import mustache from 'mustache-express'


// CONCTANDO COM ARQUIVO VARIÁVEL DE AMBIENTE
dotenv.config();

// INICIANDO SERVIDOR
const server = express();

// SETARNDO CONFIGURAÇÕES DO SERVIDOR
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.engine('mustache', mustache());


// ROTAS
server.use(router);


// PÁGINA 404
server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({error: 'Endpoint não encontrado'});
})

// RODANDO SERVIDOR ATRAVÉS DA PORTA SELECIONADA NO ARQUIVO '.ENV' VARIÁVEL DE AMBIENTE
server.listen(process.env.PORT);