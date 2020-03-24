import {Router} from 'express';
import ongController from './controllers/ongController'
import incidentController from './controllers/incidentController'
import sessionController from './controllers/sessionController'
import profileController from './controllers/profileController'

const routes = Router();
routes.get('/ongs', ongController.index); // lista todas as ongs
routes.post('/ongs', ongController.create);//cria ong
routes.post('/session',sessionController.create); //faz o login da ong
routes.get('/incidents',incidentController.index)//lista todos os casos
routes.post('/incidents',incidentController.create)//cria um caso
routes.delete('/incidents/:id',incidentController.delete)//deleta um caso
routes.get('/profile',profileController.index ) //lista casos da ong logada


export default routes;

